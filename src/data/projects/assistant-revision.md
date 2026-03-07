---
title: "StudyBot - Assistant de revision IA"
description: "Un chatbot intelligent qui aide les etudiants HEC a reviser leurs cours en generant des quiz, des flashcards et des explications personnalisees."
status: "active"
startDate: 2025-09-15
technologies: ["Python", "LangChain", "ChromaDB", "Streamlit", "OpenAI API"]
members: ["Camille Dubois", "Yuki Tanaka", "Lucas Martin", "Ines Belkacem"]
featured: true
githubUrl: "https://github.com/hec-ia/studybot"
---

## Le projet

StudyBot est ne d'un constat simple : les etudiants passent un temps considerable a reviser, souvent de maniere peu efficace. Notre assistant IA analyse les supports de cours et genere automatiquement des exercices adaptes au niveau de chaque etudiant.

## Fonctionnalites

- **Generation de quiz** : des QCM automatiques a partir des slides de cours
- **Flashcards intelligentes** : repetition espacee avec adaptation a la memoire de l'etudiant
- **Explications contextuelles** : posez une question sur un concept du cours, obtenez une reponse sourcee
- **Suivi de progression** : dashboard personnel avec points forts et axes d'amelioration

## Architecture technique

Le projet utilise une architecture RAG classique :
1. Les supports de cours (PDF, slides) sont indexes dans ChromaDB
2. Les questions des etudiants sont traitees par un pipeline LangChain
3. Les reponses sont generees en citant les sources originales

## Impact

- 150+ etudiants utilisateurs actifs
- 4.5/5 de satisfaction moyenne
- Utilise dans 8 cours differents
