<!--
SYNC IMPACT REPORT
Version change: N/A → 1.0.0
Modified principles: None (new constitution)
Added sections: All principles and sections for Textbook Generation on Physical AI project
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending
  - .specify/templates/spec-template.md ⚠ pending
  - .specify/templates/tasks-template.md ⚠ pending
  - .specify/templates/commands/*.md ⚠ pending
Follow-up TODOs: None
-->
# Textbook Generation on Physical AI (Phase 1: UI Only) Constitution

## Core Principles

### Accuracy through Tool-Verified Content Generation
All content claims must be verified against course specs and official documentation (e.g., ROS.org, NVIDIA Isaac SDK). Cross-check AI outputs with primary robotics references to ensure factual correctness.

### Clarity for Educational Audience
Content must be accessible to students with basic Python/AI knowledge, featuring step-by-step explanations and clear examples like ROS 2 publisher/subscriber nodes. Use simple language and educational aids like learning outcomes and assessments.

### Reproducibility
All content sections must be traceable to input specs, prompts, and generated code/examples. Maintain clear lineage from course outline to final content to enable verification and updates.

### Rigor in Standards
Prefer established tools and standards like ROS 2 documentation, URDF/SDF specs, and Docusaurus best practices. Maintain high technical accuracy and consistency with official specifications.

### Originality and Plagiarism Prevention
Ensure 0% plagiarism tolerance by verifying AI-generated content is original through prompt engineering and manual review. All content must be traceable to official sources or be original educational material.

### Educational Content Formatting
Use Markdown/MDX with proper headings, bullet points, code blocks (Python for ROS 2, XML for URDF), tables (hardware components), and placeholders for visuals (sensor diagrams) to enhance learning effectiveness.

## Technical Constraints and Structure
Structure: Include Preface, Chapters 1-8 (Introduction to Physical AI, ROS 2, Digital Twins, etc.), Weekly Breakdown, Hardware Requirements as Docusaurus MDX files. Tools: Spec-Kit Plus for spec-to-content conversion; Claude Code for code examples and deployment scripts. No RAG, auth, or dynamic features—static UI only. Output: Deployable site with no more than 10-15 MDX pages.

## Development and Deployment Standards
Deployment: Public GitHub repo, GitHub Pages (or Vercel) hosting with <90s demo video linked. Source types: Minimum 50% derived from official tool docs (ROS 2, Gazebo, Unity) and educational resources with references in each chapter. Bonus integration: Use Claude Code Subagents for chapter generation and Agent Skills for formatting/enhancements.

## Governance
All content must be verified against course specs and tool docs for accuracy. Zero plagiarism must be maintained via tools like Copyleaks or manual checks. Content must pass educational review for clear explanations and structured modules. Final deliverable must be a functional Docusaurus site with successful GitHub Pages deployment including navigation, search, and demo video.

**Version**: 1.0.0 | **Ratified**: 2025-12-13 | **Last Amended**: 2025-12-13
