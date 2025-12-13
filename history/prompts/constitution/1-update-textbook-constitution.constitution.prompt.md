---
id: 1
title: Update Textbook Constitution
stage: constitution
date: 2025-12-13
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Unknown
command: /sp.constitution
labels: [constitution, textbook, physical-ai, docusaurus]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```text
Project: Textbook Generation on Physical AI (Phase 1: UI Only)
This constitution outlines the guiding principles, standards, constraints, and success criteria for generating a static textbook UI using Docusaurus, deployed to GitHub Pages. The content focuses on educational material for a course covering Physical AI topics, including ROS 2, Gazebo & Unity, NVIDIA Isaac, VLA, Humanoid Development, Conversational Robotics, and a Capstone Project. Content is generated via AI/Spec-Driven methods with tools like Spec-Kit Plus and Claude Code, emphasizing structured, markdown-formatted educational content without backend logic.
Core Principles:

Accuracy through tool-verified content generation (e.g., cross-checking AI outputs with course specs and primary robotics references)
Clarity for educational audience (assuming basic Python/AI knowledge, with step-by-step explanations)
Reproducibility (all content sections traceable to input specs, prompts, and generated code/examples)
Rigor (prefer established tools and standards like ROS 2 documentation, URDF/SDF specs, and Docusaurus best practices)

Key Standards:

All content claims (e.g., robotics concepts, code snippets) must be traceable to course outline or official docs (e.g., ROS.org, NVIDIA Isaac SDK)
Formatting: Markdown/MDX with headings, bullet points, code blocks (e.g., Python for ROS 2, XML for URDF), tables (e.g., hardware components), and placeholders for visuals (e.g., sensor diagrams)
Source types: Minimum 50% derived from official tool docs (e.g., ROS 2, Gazebo, Unity) and educational resources; include references in each chapter
Plagiarism check: 0% tolerance—ensure AI-generated content is original via prompt engineering and manual review
Content clarity: Use simple language, examples (e.g., ROS 2 publisher/subscriber nodes), and educational aids like learning outcomes and assessments

Constraints:

Structure: Include Preface, Chapters 1-8 (e.g., Introduction to Physical AI, ROS 2, Digital Twins), Weekly Breakdown, Hardware Requirements; generated as Docusaurus MDX files via Spec-Kit Plus from course specs
Tools: Spec-Kit Plus for spec-to-content conversion; Claude Code for code examples and deployment scripts; no RAG, auth, or dynamic features—static UI only
Deployment: Public GitHub repo, GitHub Pages (or Vercel) hosting; include <90s demo video (e.g., via NotebookLM)
Bonus integration: Use Claude Code Subagents for chapter generation and Agent Skills for formatting/enhancements
Output: Deployable site with no more than 10-15 MDX pages; focus on educational style with visuals/tables

Success Criteria:

All content verified against course specs and tool docs (e.g., correct ROS 2 examples executable in principle)
Zero plagiarism detected via tools like Copyleaks or manual checks
Passes educational review (e.g., clear explanations, structured modules, functional Docusaurus site)
Successful deployment: Live GitHub Pages site with navigation, search, and demo video linked
Bonus achievement: Incorporation of reusable subagents/skills for efficient generation
```

## Response snapshot

Updated the constitution file to reflect the Textbook Generation on Physical AI project requirements. The new constitution includes six core principles: Accuracy through Tool-Verified Content Generation, Clarity for Educational Audience, Reproducibility, Rigor in Standards, Originality and Plagiarism Prevention, and Educational Content Formatting. It also includes sections on Technical Constraints and Structure, and Development and Deployment Standards. The constitution is version 1.0.0 and has been saved to .specify/memory/constitution.md.

## Outcome

- ✅ Impact: Updated project constitution to match requirements for Physical AI textbook generation
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md updated
- 🔁 Next prompts: Continue with textbook generation tasks
- 🧠 Reflection: Successfully mapped user requirements to constitution template

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin textbook content generation