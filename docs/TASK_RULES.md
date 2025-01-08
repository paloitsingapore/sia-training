# Task Guidelines

## Guidelines for Task Creation
- Create tasks as one-line descriptions (task titles)
- Break down complex tasks into subtasks using numeric hierarchy (e.g., 2.1, 2.2, 2.3)
- Maximum task depth is two levels (e.g., 1.1, 1.2, but not 1.1.1)
- Tasks must be in logical implementation order
- Keep tasks and subtasks small and manageable
- Maximum one task in progress at a time
- Always ask clarification questions before starting to implement any task
- Do not make any changes until all clarification questions are answered

## Guideline for Task Status Tracking:
- Use ⬜ for TODO
- Use 🟨 for IN PROGRESS
- Use ✅ for DONE
- Parent task status must reflect its subtasks:
  - ⬜ if all subtasks are TODO
  - 🟨 if any subtask is IN PROGRESS or mix of DONE and TODO
  - ✅ only if all subtasks are DONE

## Guideline for Task Completion
- Verify your changes once done before completing a task in any markdown file
- List the changes that you made after completing a task
- Task status workflow must follow these steps:
  1. Mark task as IN PROGRESS (🟨) when starting implementation
  2. Implement the changes
  3. List all changes made
  4. Ask explicitly for user review and acknowledgment
  5. Only mark as DONE (✅) after receiving clear "approved" or "accepted" response
  6. Update relevant documentation:
     - New features/endpoints: Add to both documentation files as needed
     - Document any new types, models, or endpoints
  7. After marking as DONE, propose a conventional commit message
  8. Never mark as DONE automatically after implementation

## Conventional Commit Guidelines
- After marking a task as DONE (✅), always provide a commit message following this format:
  - Format: `<type>(<scope>): <description>`
  - Types:
    - feat: New feature
    - fix: Bug fix
    - docs: Documentation changes
    - style: Code style changes
    - refactor: Code refactoring
    - test: Adding tests
    - chore: Maintenance tasks
  - Scope: Affected component (optional)
  - Description: Short summary in present tense
  - Example: `feat(auth): add password hashing implementation`

## Guideline for Task Execution
- If the request is to create a story, follow STORIES_IA_RULES.md guidelines and do not implement
- Always go one task at a time 
- Always ask clarification questions before starting the next task
- Do not proceed with any changes until questions are answered
- Strictly implement only what is specified in the task - no additional features or modifications outside the task scope
- Any changes beyond task scope must be logged as new tasks for future implementation

## Example Task Structure
⬜ 1. Implement user authentication system
   ✅ 1.1. Design database schema for users
   🟨 1.2. Implement user registration endpoint with validation and hashing
   ⬜ 1.3. Implement email verification service
   ⬜ 1.4. Implement user login endpoint with JWT
   ⬜ 1.5. Add refresh token mechanism

Note: This example demonstrates proper task hierarchy with two-level depth, status tracking, and breakdown of a complex feature into manageable subtasks.