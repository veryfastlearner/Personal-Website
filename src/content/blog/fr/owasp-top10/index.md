---
title: "Appliquer l'OWASP Top 10 au Laboratoire"
description: "Comment je pratique chaque catégorie OWASP dans des environnements isolés."
date: "2026-05-10"
lang: fr
---

La théorie ne suffit pas — je teste chaque catégorie de l'OWASP Top 10 sur des applications volontairement vulnérables :

| Catégorie | Pratique en labo |
| --- | --- |
| A01 Contrôle d'accès défaillant | IDOR, traversal de chemin, forced browsing |
| A02 Défaillances cryptographiques | Hachage faible, secrets en clair |
| A03 Injection | SQLi avec sqlmap, payloads XSS |
| A04 Conception non sécurisée | Failles de réinitialisation de mot de passe |
| A05 Défauts de configuration | Identifiants par défaut, erreurs verbeuses |

Burp Suite + ZAP me donnent la vue du trafic ; Kali fournit l'outillage offensif.

Prochaine étape : enchaîner les constats comme le ferait un vrai engagement red-team.
