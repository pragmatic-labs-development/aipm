---
title: 'The AI PM Tech Stack: What You Actually Need to Know'
description: 'You do not need to become an engineer. But knowing which tools your team uses and why will make you a dramatically better AI product manager.'
pubDate: 'Feb 24 2026'
category: 'Getting Started'
readTime: '8 min read'
heroImage: '../../assets/heroes/midnight-teal.webp'
---

There is a version of "technical enough" that requires years of engineering experience. That is not what this is about. This is about the minimum viable technical literacy that changes how you make decisions, run meetings, and write specs.

## The Stack, Layer by Layer

**Foundation Models**

These are the large language models your product is built on top of — GPT-4o, Claude, Gemini, Llama. You do not need to know how they were trained. You do need to understand that they are probabilistic, that they have knowledge cutoffs, that they hallucinate, and that their capabilities change with each version.

When your team says "the model can't do that," your question should be: can't do it with current prompting, can't do it reliably enough to ship, or can't do it at all? These are very different constraints.

**Embeddings and Vector Search**

Many AI features need to retrieve relevant context before passing it to a model. This is done via embeddings stored in a vector database (Pinecone, Weaviate, pgvector). Retrieval quality is often the biggest lever on output quality — and it is a product problem as much as an engineering one.

**APIs and Latency**

Every model call takes time. For a feature that chains multiple calls, latency compounds. Users tolerate ~1–2 seconds for AI features. Beyond that, you need streaming or loading skeletons — product design decisions, not just engineering ones.

**Fine-Tuning vs. Prompting**

Most teams should exhaust prompting and retrieval before considering fine-tuning. Fine-tuning requires training data, compute budget, evaluation infrastructure, and ongoing maintenance. If you are not sure whether you need it, you probably do not.

## The One Technical Document Every PM Should Write

Before any new AI feature kicks off, write a one-page technical assumptions document. List what you assume the model can do, what retrieval will find, and what latency will be. Review it after your first prototype. The gaps are your actual product risks.
