---
title: "Retour d'expérience : pourquoi utiliser moins le LLM a amélioré notre pipeline"
summary: "Octave Dumont (VP HEC IA Intelligence) partage un retour d'expérience de son stage chez BNP Paribas CIB : passer d'un pipeline tout-LLM à une architecture hybride a fait passer le F1 score de 0,51 à 0,93."
pubDate: 2026-05-24
source: "Octave Dumont, LinkedIn"
category: "ai"
tags: ["llm", "production", "retour-experience", "bnp-paribas"]
image:
  src: "/logos/bnp-paribas.svg"
  alt: "Logo BNP Paribas"
draft: false
---

Retour d'expérience d'Octave Dumont (VP HEC IA Intelligence, CTO Galahad), publié sur LinkedIn, sur son stage chez BNP Paribas CIB.

Le projet : extraire des informations structurées depuis des milliers d'e-mails bancaires confidentiels, sur des formats propres à l'entreprise, hors distribution d'entraînement des modèles.

La solution évidente, l'extraction par LLM avec des instructions détaillées, plafonnait à un F1 score de 0,51 : trop d'erreurs pour la production. Les correctifs habituels n'ont pas suffi : boucles d'auto-vérification (latence trop élevée), recherche sémantique/RAG (échec sur les codes alphanumériques), few-shot (coût en tokens prohibitif à l'échelle).

Ce qui a marché : ne pas traiter le LLM comme la solution complète, mais comme un outil dans un pipeline structuré : prétraitement pour éliminer le bruit, règles regex et validateurs pour les motifs déterministes (IBAN, codes SWIFT), LLM réservé à l'ambiguïté sémantique réelle, validation déterministe en post-traitement.

Résultat annoncé : F1 score de 0,93 (+81%), latence de production tenue, zéro hallucination sur les champs à format strict.

La leçon retenue : les LLM excellent en raisonnement sémantique, mais les systèmes de production ont besoin d'architectures hybrides qui combinent l'intelligence du LLM et la rigueur de l'ingénierie classique.
