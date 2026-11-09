---
title: "Inside the SOC: Turning Logs into Alerts with SIEM and SOAR"
description: "How a SOC uses firewalls, EDR, packet data, and flow logs to turn raw noise into contextual alerts, and where SIEM ends and SOAR begins."
date: "2026-11-09"
lang: en
---

A security operations center has one central problem: turning noise, the isolated stream of logs from dozens of tools, into contextual alerts an analyst can actually act on. Everything else, the frameworks, the SIEM, the SOAR, exists to serve that goal.

## Risk, frameworks, and communication

Frameworks and control standards exist to help define, control, and mitigate risk. Risk itself is usually measured as a combination of probability and impact. Once a risk is identified, there are four classic responses:

- **Avoid** it, by removing the exposure.
- **Mitigate** it, by reducing probability or impact.
- **Transfer** it, for example through insurance or outsourcing.
- **Accept** it, consciously and with sign-off.

The NIST Cybersecurity Framework fits into this picture as a set of outcomes organized into Functions and Categories that cover cybersecurity objectives. And because risk decisions ultimately involve people, communicating effectively and persuasively with different audiences is a core professional skill, not a soft extra.

## What a SOC watches

A SOC looks at logs, unglamorous as that sounds, to find threats and indicators of compromise (IOCs). The day-to-day work of cybersecurity analysts splits into alert triage and [threat hunting](/blog/threat-hunting-peak-framework/). The data comes from a stack of protection technologies:

| Source | What it contributes |
| --- | --- |
| **Firewall** | Insight into network traffic. |
| **Web proxies and gateways** | Visibility into web traffic and requests. |
| **IDS/IPS** | Detection and prevention of hostile network activity. |
| **Antivirus / antimalware** | Host-level malware detection. |
| **Packet sniffers** | Raw capture with tools such as Wireshark and tcpdump. |
| **Vulnerability scanners** | Findings from tools such as Nessus. |
| **Honeypots** | Decoys that surface attack behavior. |
| **Native logs** | Server and application logs. |

![Common protection technologies across endpoints, email, network, and cloud](/blog/soc-siem-soar-fundamentals/protection-technologies.png)

## Packets, flows, and logs

Packet captures are helpful but contain a lot of data: actual copies of the ones and zeros traveling through the network, stored in PCAP format. Because of the volume, capture and storage have to be discretionary.

That is why other means of recording and analyzing traffic are common:

- **NetFlow:** per-device network metadata based on a sampling of packets; only headers and general identifying information are collected.
- **VPC Flow Logs:** cloud-based capture for AWS or Google Cloud environments.
- **NSG Flow Logs:** a feature of Azure Network Watcher for Azure environments.

The same split exists in the tooling. Network-based systems include Snort, Suricata, Cisco Firepower Next-Generation IPS, and Palo Alto Networks. Host-based systems include McAfee, OSSEC, and Tripwire.

## SIEM versus SOAR

A SIEM (Security Information and Event Management) centralizes the collected data, logs and events, handles them, and makes alert triage possible.

A SOAR (Security Orchestration, Automation and Response) is more advanced. It can use the same collectors, but adds orchestration, automation, and even automated responses to low-level threats, so analysts are not manually repeating the same playbook all day.

![How SIEM, SOAR, threat intelligence, and analysts fit together in a SOC](/blog/soc-siem-soar-fundamentals/defense-technologies.png)

## Alert quality: the two-by-two

Every alert decision is a combination of two questions: did a rule match, and was there really an attack?

| Rule matched | Attack detected | Result |
| --- | --- | --- |
| Yes | Yes | **True positive** — investigate and respond. |
| Yes | No | **False positive** — tune the rule. |
| No | Yes | **False negative** — a coverage gap to fix. |
| No | No | **True negative** — quiet day. |

Positive or negative describes the rule matching. True or false describes whether an attack was actually detected.

## Who does what

A SOC is also a team with distinct roles:

| Role | Responsibility |
| --- | --- |
| **SOC Manager** | Provides guidance and support and ensures smooth operations within the SOC. |
| **Defense Analyst** | Investigates notable events. |
| **Architect** | Chooses and implements tools. |
| **Engineer** | Creates and tests detections. |

## Enrichment and response tooling

Triage improves dramatically with the right integrations:

- **MaxMind** provides geolocation information for DNS and IP addresses.
- **CloudPassage** provides information about system resources.
- **VirusTotal, PhishTank, and Symantec** help with URL reputation, file reputation, or file detonation.
- **Remedy and ServiceNow** handle ticket management.
- **SSH or Windows Remote Management** applications allow OS-level automation such as blocking IP addresses and terminating processes.

In a SOAR context, the artifacts under investigation are essentially digital footprints, and a reputation check against VirusTotal is a standard enrichment step.

## Getting the skills

Networking and forensic skills are the foundation, and a home lab is the standard way to build them. A home lab built around Security Onion is a common starting point, because it packages many of these capabilities in one place.
