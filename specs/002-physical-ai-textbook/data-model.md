# Data Model: Physical AI Textbook

## Overview
This document defines the data model for the Physical AI textbook, including the structure of content, navigation, and related entities.

## Content Structure

### Textbook Components
- **Preface**
  - Title: "Introduction to Physical AI Course"
  - Content: Learning outcomes, assumptions about student knowledge, course overview
  - Metadata: Author, creation date, last updated

- **Chapters (8 total)**
  - Chapter ID (ch1-ch8)
  - Title (e.g., "Introduction to Physical AI", "ROS 2", etc.)
  - Content (MDX format with text, code blocks, tables)
  - Learning objectives
  - Key concepts
  - Code examples (with language tags)
  - Assessment questions
  - References (markdown links to official docs)

- **Additional Sections**
  - Weekly breakdown: Timeline and pacing guide
  - Assessments: Quizzes and project guidelines for each chapter
  - Hardware requirements: Tables of components and costs
  - Capstone project: Guidelines and assessment criteria

## Content Entities

### Chapter Entity
- **Fields**:
  - id: string (ch1, ch2, ..., ch8)
  - title: string
  - content: MDX content string
  - objectives: array of strings (learning objectives)
  - concepts: array of strings (key concepts covered)
  - codeExamples: array of objects {language, code, description}
  - assessments: array of objects {question, type, difficulty}
  - references: array of objects {title, url}
  - order: integer (1-8)

### Code Example Entity
- **Fields**:
  - language: string (python, xml, etc.)
  - code: string (the actual code snippet)
  - description: string (explanation of what the code does)
  - chapterId: string (which chapter it belongs to)
  - purpose: string (why this example is relevant)

### Assessment Entity
- **Fields**:
  - question: string (the actual question)
  - type: string (multiple-choice, short-answer, coding exercise)
  - difficulty: string (beginner, intermediate, advanced)
  - chapterId: string (which chapter it belongs to)
  - answer: string (for auto-gradable questions)
  - explanation: string (why the answer is correct)

### Hardware Component Entity
- **Fields**:
  - name: string (e.g., "LiDAR Sensor")
  - type: string (e.g., "sensor", "actuator", "processor")
  - description: string
  - typicalCost: number (in USD)
  - useCase: string (how it's used in Physical AI)
  - chapterId: string (which chapter discusses this component)

## Navigation Structure

### Sidebar Navigation
- **Fields**:
  - label: string (display name)
  - to: string (relative path to MDX file)
  - collapsed: boolean (whether section is collapsed by default)
  - items: array of navigation items (for nested structure)

### Navigation Hierarchy
1. Preface
2. Chapters (1-8)
   - Learning Objectives
   - Content
   - Code Examples
   - Key Concepts
3. Additional Sections
   - Weekly Breakdown
   - Assessments
   - Hardware Requirements
   - Capstone Project

## Relationships

### Chapter to Code Examples
- One chapter can have multiple code examples
- Each code example belongs to one chapter

### Chapter to Assessments
- One chapter can have multiple assessments
- Each assessment belongs to one chapter

### Chapter to Hardware Components
- One chapter can reference multiple hardware components
- One hardware component can be referenced by multiple chapters

## Validation Rules

### Content Validation
- Each chapter must have at least 2 code examples
- Each chapter must have learning objectives
- All references must be valid markdown links
- Content must follow MDX syntax

### Structural Validation
- Chapters must be ordered sequentially (ch1 to ch8)
- No duplicate chapter IDs
- All navigation items must point to existing MDX files
- Preface must come before Chapter 1

## State Transitions (if applicable)

### Content Status
- draft: Content is being written
- reviewed: Content has been reviewed for technical accuracy
- published: Content is ready for deployment