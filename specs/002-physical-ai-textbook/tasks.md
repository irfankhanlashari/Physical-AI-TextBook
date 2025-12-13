---
description: "Task list for Physical AI Textbook Generation"
---

# Tasks: Physical AI Textbook Generation

**Input**: Design documents from `/specs/[002-physical-ai-textbook]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: No explicit test requirements in feature specification, so tests are not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `my-website/` at repository root
- **Content**: `my-website/docs/` for textbook content
- **Configuration**: `my-website/` for Docusaurus config files

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic Docusaurus structure

- [x] T001 Create my-website directory structure
- [x] T002 Initialize Docusaurus project with required dependencies
- [x] T003 [P] Configure Docusaurus settings in docusaurus.config.js
- [x] T004 [P] Set up sidebar navigation in sidebars.js
- [x] T005 Create GitHub Actions workflow for deployment in .github/workflows/deploy.yml

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core textbook structure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create content directory structure in my-website/docs/
- [x] T007 [P] Set up basic MDX components for textbook formatting
- [x] T008 [P] Configure code block syntax highlighting for Python and other languages
- [x] T009 Create image placeholder structure for future visual content
- [x] T010 Configure table formatting for hardware requirements and other data

**Checkpoint**: Foundation ready - textbook chapter implementation can now begin in parallel

---

## Phase 3: User Story 1 - Student Learning Physical AI Concepts (Priority: P1) 🎯 MVP

**Goal**: Enable a student to access and learn from the Physical AI textbook with clear examples and content

**Independent Test**: Student can navigate through the textbook, understand concepts with provided examples, and run code snippets successfully

### Implementation for User Story 1

- [x] T011 [P] [US1] Create Preface chapter in my-website/docs/preface.mdx
- [x] T012 [P] [US1] Create Chapter 1: Introduction to Physical AI in my-website/docs/ch1-introduction.mdx
- [x] T013 [P] [US1] Create Chapter 2: ROS 2 in my-website/docs/ch2-ros2.mdx
- [x] T014 [US1] Add basic code examples to Chapter 2 (Python/rclpy) in my-website/docs/ch2-ros2.mdx
- [x] T015 [US1] Add learning objectives and key concepts to each chapter
- [x] T016 [US1] Add navigation links between chapters in sidebar

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Educator Teaching Physical AI Course (Priority: P2)

**Goal**: Provide a comprehensive textbook with assessments and project guidelines for educators

**Independent Test**: Educator can use the textbook as primary course material with the provided assessments and project guidelines

### Implementation for User Story 2

- [x] T017 [P] [US2] Create Chapter 3: Digital Twins in my-website/docs/ch3-digital-twins.mdx
- [x] T018 [P] [US2] Create Chapter 4: NVIDIA Isaac in my-website/docs/ch4-nvidia-isaac.mdx
- [x] T019 [P] [US2] Create Chapter 5: VLA in my-website/docs/ch5-vla.mdx
- [x] T020 [US2] Create assessments for Chapter 1-5 in my-website/docs/assessments.mdx
- [x] T021 [US2] Create weekly breakdown/timeline in my-website/docs/weekly-breakdown.mdx
- [x] T022 [US2] Create hardware requirements section with tables in my-website/docs/hardware-requirements.mdx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Developer Implementing Physical AI Systems (Priority: P3)

**Goal**: Provide reference material with practical examples and code snippets for developers

**Independent Test**: Developer can find practical examples and code snippets to implement Physical AI components

### Implementation for User Story 3

- [x] T023 [P] [US3] Create Chapter 6: Humanoid Development in my-website/docs/ch6-humanoid.mdx
- [x] T024 [P] [US3] Create Chapter 7: Conversational Robotics in my-website/docs/ch7-conversational.mdx
- [x] T025 [P] [US3] Create Chapter 8: Capstone Project in my-website/docs/ch8-capstone.mdx
- [x] T026 [US3] Add detailed code examples to Chapter 6 (hardware components, sensors) in my-website/docs/ch6-humanoid.mdx
- [x] T027 [US3] Create capstone project guidelines in my-website/docs/ch8-capstone.mdx
- [x] T028 [US3] Add advanced code examples to Chapter 7 in my-website/docs/ch7-conversational.mdx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the entire textbook

- [x] T029 [P] Update navigation with all chapters in sidebars.js
- [x] T030 Add proper citations and references to all chapters
- [x] T031 [P] Add image placeholders throughout the textbook
- [x] T032 Create demo video (under 90 seconds) showcasing the textbook UI
- [x] T033 Test site build with `npm run build` to ensure no errors
- [x] T034 Run quickstart.md validation to confirm textbook works as expected

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May reference content from US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May reference content from US1/US2 but should be independently testable

### Within Each User Story

- Core content before assessments
- Basic chapters before advanced topics
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all User Story 1 chapters together:
Task: "Create Preface chapter in my-website/docs/preface.mdx"
Task: "Create Chapter 1: Introduction to Physical AI in my-website/docs/ch1-introduction.mdx"
Task: "Create Chapter 2: ROS 2 in my-website/docs/ch2-ros2.mdx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence