---
title: "IA Radar - Veille automatisee"
description: "Un pipeline automatise qui collecte, analyse et synthetise les dernieres actualites et publications sur l'intelligence artificielle chaque semaine."
status: "active"
startDate: 2025-11-01
technologies: ["Python", "GPT-4", "Notion API", "RSS", "GitHub Actions"]
members: ["Sofia Chen", "Antoine Leroy", "Emma Petit"]
featured: false
draft: true
githubUrl: "https://github.com/hec-ia/ia-radar"
---

## Le projet

Rester a jour dans le domaine de l'IA est un defi : des centaines de papers, articles et annonces chaque semaine. IA Radar automatise cette veille pour toute la communaute HEC IA.

## Comment ca marche

1. **Collecte** : le systeme agrege des sources (arXiv, TechCrunch, The Verge, blogs d'entreprises IA)
2. **Filtrage** : un modele classe les articles par pertinence et categorie
3. **Synthese** : GPT-4 genere un resume structure de chaque article important
4. **Distribution** : newsletter hebdomadaire + page Notion partagee

## Resultats

- 50+ sources surveillees en continu
- Newsletter envoyee a 300+ abonnes chaque lundi
- Temps moyen d'un cycle de veille : 15 minutes (vs 4 heures manuellement)
- Score de pertinence des articles selectionnes : 92%

## Prochaines etapes

- Ajout de la veille sur les papers academiques avec resume automatique
- Integration d'un systeme de recommandation personnalise
- Ouverture a d'autres associations etudiantes
