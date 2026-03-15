---
title: 'Discovery Is Different When You Are Building AI Features'
description: 'User interviews and jobs-to-be-done still matter. But AI product discovery has a unique additional layer most teams miss entirely.'
pubDate: 'Mar 08 2026'
category: 'Discovery'
readTime: '6 min read'
heroImage: '../../assets/heroes/magenta-rose.webp'
---

Standard discovery asks: what problem does the user have, and how painful is it? AI product discovery has to ask a harder question on top of that: does the user believe a machine can help?

## The Trust Gap

In almost every AI feature launch, there is a gap between what the model can do and what users believe it can do. Bridging that gap is a discovery problem before it is an engineering problem.

The users most likely to adopt your AI feature are not necessarily those with the most acute pain. They are those with the most tolerance for AI-assisted workflows — which is often a function of prior experience with AI tools, not problem severity.

## Four Questions Your Discovery Must Answer

**1. What does the user do when the AI is wrong?**
Not if — when. Understanding the failure recovery workflow is as important as understanding the primary workflow. If being wrong 10% of the time destroys the user's trust, you have a deployment problem before a feature problem.

**2. Where does the user need to feel in control?**
AI features that automate decisions users feel ownership over will be resisted. Discovery should map which decisions users want help with vs. which they want to own.

**3. What is the cost of a false positive vs. a false negative?**
For some tasks, suggesting something incorrect is a minor annoyance. For others, it creates downstream work or reputational risk. Your threshold for shipping should match the cost asymmetry.

**4. How does the user's trust change over time?**
First session trust is different from week-4 trust. Build longitudinal feedback into your discovery process. A prototype test is not enough.

## The Discovery Artifact That Matters Most

Write a "when it goes wrong" scenario. What happens when the AI gives a bad output on the worst possible input? Walk through it in detail. If the scenario is survivable, ship. If it isn't, go back to the capability constraints.
