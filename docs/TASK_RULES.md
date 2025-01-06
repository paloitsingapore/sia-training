 # Task Guidelines

## Guidelines for Task Creation
- create task file under docs/TASK_PLAN.md
- Create tasks as one-line descriptions (task titles)
- Break down complex tasks into subtasks using numeric hierarchy (e.g., 2.1, 2.2, 2.3)
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
  6. Never mark as DONE automatically after implementation

## Guideline for Task Execution
- Always go one task at a time 
- Always ask clarification questions before starting the next task
- Do not proceed with any changes until questions are answered
- Strictly implement only what is specified in the task - no additional features or modifications outside the task scope
- Any changes beyond task scope must be logged as new tasks for future implementation

## Task Format Example
1. Initialize project structure ✅
2. Implement user authentication 🟨
   2.1. Create login endpoint ✅
   2.2. Add password hashing 🟨
      2.2.1. Implement password salt generation ✅
      2.2.2. Add bcrypt hashing function 🟨
      2.2.3. Create password validation helper ⬜
   2.3. Implement JWT token generation ⬜
      2.3.1. Set up JWT secret key ⬜
      2.3.2. Create token generation service ⬜
3. Set up database schema ⬜