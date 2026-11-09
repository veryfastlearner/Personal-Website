---
title: "Know Your Phish: Spear Phishing, Whaling, Vishing, and Smishing"
description: "A plain-language guide to phishing variants, credential stuffing, APTs, and the difference between attack tactics and techniques."
date: "2026-11-09"
lang: en
---

Most attacks still start with a human, not a zero-day. Social engineering works because it abuses trust, urgency, and habit rather than a software bug. Before writing a single query in a SIEM, it helps to know exactly what each attack type is called and what makes it different.

## The phishing family

| Type | What it is | What makes it different |
| --- | --- | --- |
| **Spear phishing** | A highly personalized email or message aimed at a specific individual or organization. | The attacker researches the victim's job title, name, and employer to build trust. |
| **Whaling** | A highly targeted attack aimed at C-suite executives, directors, or other high-profile, high-privilege targets. | It goes after the "big fish" to steal large sums of money or highly sensitive data. |
| **Vishing** | Voice phishing: scammers use phone calls or voice messages to trick victims. | The payload is a conversation, often used to extract information or authorize transactions. |
| **Smishing** | SMS phishing: malicious text messages sent to mobile devices. | It arrives as a text, usually with suspicious links or urgent requests. |

The pattern across all four is the same: the attacker researches the target, builds a plausible pretext, and pushes the victim toward an action, whether that is clicking a link, replying with a code, or approving a payment.

## Credential stuffing

Credential stuffing relies on a simple human flaw: reusing the same login credentials across different accounts. When one service is breached and credentials leak, attackers replay those same username and password pairs against many other services, hoping the victim reused them.

This is why password reuse turns a small breach somewhere else into an incident in your environment. Unique passwords and multi-factor authentication break the chain.

## Advanced Persistent Threats

An APT (Advanced Persistent Threat) is a complex and prolonged cyberattack. "Advanced" reflects the tooling and tradecraft; "persistent" reflects the goal of staying in an environment long enough to reach the attacker's objective, rather than hitting a single host and leaving.

## Tactics versus techniques

It is easy to mix these up. Techniques are the concrete actions an attacker takes, such as DDoS or DoS. Tactics are the goals those actions serve, such as impact. One tactic can be achieved through several techniques.

| Concept | Examples |
| --- | --- |
| **Technique** | DoS, DDoS, credential stuffing |
| **Tactic** | Impact, initial access, persistence |

This is the same distinction the [MITRE ATT&CK framework](/blog/threat-intelligence-essentials/) is built on, which I cover more in the threat-intelligence post.

## The defensive cycle

Defense is usually described with five verbs: **predict, prevent, avoid, mitigate, respond**. In practice:

- **Predict** what is likely to be targeted and how.
- **Prevent** the attack from landing where you can.
- **Avoid** the exposure entirely, for example by removing the vulnerable surface.
- **Mitigate** the impact of what you cannot fully prevent.
- **Respond** when prevention fails, to contain and recover.

## Where phishing fits in an attack

Phishing is rarely the whole story. It is the delivery step of a longer chain that can move from reconnaissance to exploitation, installation, command and control, and finally actions on objectives.

![Cyber Kill Chain stages from reconnaissance to actions on objectives](/blog/phishing-social-engineering/cyber-kill-chain.png)

Recognizing the attack type is the first triage step: a smishing campaign, a whaling attempt, and a credential-stuffing burst leave very different traces in email, proxy, and authentication logs.
