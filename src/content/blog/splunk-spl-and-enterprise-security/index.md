---
title: "Practical Splunk: SPL, Enterprise Security, and Incident Response"
description: "From SPL queries and Windows EventCodes to CIM, risk-based alerting, SOAR playbooks, and the incident response lifecycle."
date: "2026-11-09"
lang: en
---

Splunk shows up in almost every SOC job description, and for good reason: it indexes logs, and a single query language turns them into reports, dashboards, and data models. These are the SPL and Enterprise Security notes I wish I had organized earlier.

## SPL in practice

SPL (Search Processing Language) feels close to SQL, but it works as a pipeline: each command transforms the events from the previous one. Transforming commands such as `stats` and `chart` are what create statistics and visualizations.

The `AND` operator is implied, so both of these queries are valid:

```spl
index=windowslogs AccountName!=SYSTEM AND AccountName=James
```

```spl
index=windowslogs AccountName!=SYSTEM AccountName=James
```

Counting and formatting results:

```spl
index=windowslogs | stats count by EventID | sort count | reverse
```

```spl
index=windowslogs | chart count by EventID
```

Along the way, `fields` trims the result set and `highlight` marks fields of interest in the output.

Two small facts that save time:

- Fields that appear in at least 20% of events are automatically considered "interesting fields".
- In Windows logs, `Image` is the field containing the full file path and process name (for example, `C:\Windows\explorer.exe`) that generated an event.

Splunk roles map to responsibility levels: ADMIN manages ingest objects, while POWER and USER have progressively narrower capabilities.

## Windows EventCodes

Event codes (IDs) identify specific Windows log types. EventCode 1 is process creation and 4624 is a successful logon.

The key tip: not all event IDs are unique across log types. Always filter by `LogName` (Security, System, PowerShell) alongside EventCode.

## Finding anomalous logins

A classic VPN hunting scenario is Impossible Travel: a user logging in from two distant locations in an unrealistically short time. This query compares each user's logins per country against their total logins and flags countries that account for a tiny share:

```spl
index=vpnlogs
| eventstats count as logins_by_user by user
| eventstats count as logins_by_user_country by user src_country
| eval country_freq=logins_by_user_country/logins_by_user
| where country_freq < 0.1
| table _time user src_ip src_country country_freq
```

`eventstats` differs from `stats` because it appends the aggregation to every event instead of collapsing them, which is exactly what makes the per-user ratio possible. Machine learning follows the same idea further: a model is trained (`fit`) on past data and applied (`apply`) to identify outliers automatically, improving on static rules. Both approaches combine SPL with geolocation or lookups.

## Combining fields across sources

The same data often arrives under different field names depending on the source. `coalesce` returns the first non-null value from a list of fields:

```spl
index=main sourcetype=cp_log
| eval SourceIP = coalesce(src, SourceIP, sIP)
```

This combines `src`, `SourceIP`, and `sIP` into a single `SourceIP` field, which is what makes cross-source correlation possible.

## Hunting failed logins

The search bar itself is a detection tool. Searching for `fail*` OR `password` surfaces weird or suspicious activity such as access denied and failed password events. Narrowing it down:

```spl
fail* OR password
```

```spl
fail NOT password
```

Good practice rooms for this kind of work: [Benign](https://tryhackme.com/room/benign), [PS Eclipse](https://tryhackme.com/room/posheclipse), [Conti](https://tryhackme.com/room/contiransomwarehgh), and [Volt Typhoon](https://tryhackme.com/room/volttyphoon).

## Enterprise Security essentials

Splunk Enterprise Security (ES) builds a detection workflow on top of the data.

**Normalize with CIM.** The Common Information Model normalizes data so the same field names (`src`, `dest`, `user`, `action`) work across sources. Data models accelerate searches on top of that normalized layer.

**Enrich with Asset & Identity and threat intel.** Assets are servers and workstations; identities are users. Threat intelligence frameworks such as STIX/TAXII feed IOCs into ES to match against events.

**Detect with correlation searches.** Detections in ES are correlation searches that trigger findings. They can be rule-based or risk-based.

**Understand the elements.** A finding is a detection result. A risk-based finding is a risk-score alert. Adaptive Response applies automated actions. An entity is a user or host. Intermediate findings are contributing events.

**Watch the dashboards.** Security Posture, Incident Review, Risk Analysis, Asset Investigator, and Threat Intel.

**Use risk-based alerting.** RBA aggregates risk scores per entity over time and triggers when a threshold is crossed, which reduces the one-alert-per-rule noise problem.

**Automate with SOAR.** Playbooks are triggered by findings or Adaptive Responses. For how a SIEM differs from a SOAR in practice, see the [SOC fundamentals article](/blog/soc-siem-soar-fundamentals/).

The investigation workflow in one line: work through Incident Review, check entities, use Asset & Identity context, review the findings, then escalate or close.

![Enterprise Security investigation management: asset and identity correlation, threat intelligence, notable events, adaptive response, and risk analysis](/blog/splunk-spl-and-enterprise-security/investigation-management.png)

## Incident response lifecycle

Detection is only half the job. The response lifecycle runs through five stages: **preparation, identification, containment, eradication, and recovery**.

When an alert turns out to be real, the investigation answers five questions:

- Was this an actual attack?
- Was the attack successful? This decides between containment and mitigation.
- What assets were compromised?
- What activities did the attacker carry out?
- How should the organization respond?

Endpoint Detection and Response (EDR) tools support this by continuously monitoring devices such as laptops, servers, and mobile devices to detect and neutralize threats like ransomware and zero-day exploits.

A typical stack in practice: firewalls, web and email proxies, EDR on the most critical servers, antivirus/antimalware on user machines, and all important logs flowing into a Splunk Enterprise Security instance that the SOC helps manage.

## Quick reference

- **Rainbow table:** a massive precomputed database used to reverse cryptographically hashed passwords back into plain text.
- **Tor nodes:** volunteer-operated relays that route and encrypt traffic through a random, multi-layered path to hide identity, location, and browsing activity. The technique is called onion routing.
- **CNAME records:** DNS records used for subdomain management, which matters when mapping attacker infrastructure.
