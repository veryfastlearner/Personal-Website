---
title: "Leçons des Défis CTF"
description: "Ce que la résolution continue de CTFs m'a appris sur la sécurité réelle."
date: "2026-06-20"
lang: fr
---

Les CTF sont mon laboratoire. Après des dizaines de défis en web, Linux et réseau, quelques leçons restent :

## Lire la source

Presque chaque défi web cache un indice dans les commentaires, les bundles JS ou les en-têtes de réponse. L'énumération bat le devinette.

## Échouer plus vite

Quand un vecteur d'attaque bloque, je change de chemin au lieu de forcer. Injection SQL → contournement d'auth → IDOR — l'application fuit presque toujours quelque part.

## Documenter pendant la résolution

Les write-ups forcent la clarté. Si je ne peux pas expliquer la chaîne d'exploit, je ne la maîtrise pas vraiment.

Ces habitudes se transposent directement au pentest professionnel — même méthodologie, enjeux plus élevés.
