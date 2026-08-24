---
title: "Field notes: why using the LLM less improved our pipeline"
summary: "Octave Dumont (VP HEC IA Intelligence) shares a field report from his internship at BNP Paribas CIB: moving from an all-LLM pipeline to a hybrid architecture took the F1 score from 0.51 to 0.93."
pubDate: 2026-05-24
source: "Octave Dumont, LinkedIn"
category: "ai"
tags: ["llm", "production", "field-notes", "bnp-paribas"]
image:
  src: "/logos/bnp-paribas.svg"
  alt: "BNP Paribas logo"
draft: false
---

Field report from Octave Dumont (VP HEC IA Intelligence, CTO at Galahad), published on LinkedIn, about his internship at BNP Paribas CIB.

The project: extract structured information from thousands of confidential banking emails, in firm-specific formats the models had never trained on.

The obvious solution, LLM extraction with detailed instructions, capped at an F1 score of 0.51: too many errors for production. The usual fixes didn't help either: self-verification loops (latency too high), semantic retrieval/RAG (failed on alphanumeric codes), few-shot examples (prohibitive token cost at scale).

What worked: stop treating the LLM as the whole solution, and use it as one tool in a structured pipeline: preprocessing to strip noise, regex and validators for deterministic patterns (IBANs, SWIFT codes), the LLM reserved for genuine semantic ambiguity, deterministic validation in post-processing.

Reported result: F1 score of 0.93 (+81%), production latency held, zero hallucinations on strict-format fields.

The takeaway: LLMs excel at semantic reasoning, but production systems need hybrid architectures that combine LLM intelligence with classical engineering discipline.
