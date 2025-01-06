# Story Implementation Rules

## General Story Guidelines
1. Always ask questions before and during story creation:
   1.1. Seek clarification on requirements
   1.2. Verify assumptions
   1.3. Confirm technical approach
   1.4. Validate scope boundaries
   1.5. Check dependencies and constraints
2. Never proceed with story creation or implementation without clear answers
3. Document all clarifications in the story

## File Organization Rules
1. Story File Location
   1.1. Create all stories in `/stories` directory
   1.2. Use filename format: `SIA-XXX-brief-title.md`
   1.3. Keep one story per file

## Story Structure Rules

1. Basic Information
   1.1. Include story ID (format: SIA-XXX)
   1.2. Add descriptive title
   1.3. List dependencies if any
   1.4. Define story type (feature/bug/enhancement)

2. Story Description Rules
   2.1. Write user story format (As a/I want/So that)
   2.2. List pre-conditions
   2.3. Define scope boundaries

3. Acceptance Criteria Rules
   3.1. Define user interface requirements
   3.2. List functional requirements
   3.3. Specify validation rules
   3.4. Document error scenarios

4. Technical Documentation Rules
   4.1. Define API contracts
   4.2. List required configurations
   4.3. Specify security requirements
   4.4. Document data models
   4.5. Include component implementation examples
      4.5.1. Show TypeScript interfaces
      4.5.2. Provide component structure
      4.5.3. Include styling examples
      4.5.4. Document props and their usage
      4.5.5. Specify component status:
         - New components: Provide full implementation example
         - Existing components: Reference file path and any modifications
         - Reusable components: Document usage example
      4.5.6. Document dependencies and imports
      4.5.7. Specify Integration Location:
         - Page-level components: Integrate in corresponding page component
         - Feature components: Integrate in feature-specific container/layout
         - Layout components: Integrate in appropriate layout component
         Example: Homepage sections should be integrated in HomePage.tsx, not in pages/index.tsx

5. Implementation Rules
   5.1. Break down into TASKS.md format
   5.2. Define testing requirements
   5.3. List documentation needs
   5.4. Specify deployment requirements

## Story Template Format
Stories must be created using the template file at `/stories/_TEMPLATE.md`

## Story Creation Checklist

1. Story is properly identified with SIA-XXX format
2. Description follows user story format
3. Pre-conditions are clearly listed
4. Acceptance criteria are specific and testable
5. Technical requirements are documented
6. Tasks are created in TASKS.md
7. Testing requirements are defined
8. Documentation needs are identified
9. Ask questions and seek clarifications at each step

## Story Implementation Process

1. Story Creation
   1.1. Create story file in `/stories` directory
   1.2. Use _TEMPLATE.md as base
   1.3. Follow SIA-XXX-brief-title.md naming convention
   1.4. Fill all required sections
   1.5. Ask questions and seek clarificatons at each step

2. Story Planning
   2.1. Review all requirements
   2.2. Identify dependencies
   2.3. Create implementation plan
   2.4. Get stakeholder approval
   2.5. Ask questions and seek clarifications at each step

3. Development Flow
   3.1. Create story branch from main
   3.2. Create and follow task as per the tasks guidelines
   3.3. Regular commits with conventional format
   3.4. Ask questions and seek clarifications at each step

4. Quality Gates
   4.1. Code review completion
   4.2. Test coverage verification
   4.3. Documentation updates
   4.4. Acceptance criteria validation
   4.5. Ask questions and seek clarifications at each step

## Rules Reference Example

### Good Story Example
```
SIA-001: Implement User Login
As a user
I want to log in securely
So that I can access my account

Pre-conditions:
- User registration exists
- Database is configured

Acceptance Criteria:
- Login form with validation
- Secure password handling
- Error messages for invalid login

Technical Requirements:
- REST API endpoint
- JWT authentication
- Password encryption

Component Implementation:
```typescript
interface LoginFormProps {
  onSubmit: (credentials: Credentials) => Promise<void>;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({ 
  onSubmit, 
  isLoading 
}) => {
  // Component implementation
};
```

Technical Requirements:
1. Components
   a. New Component:
   ```typescript
   // Path: apps/frontend/components/auth/LoginForm.tsx
   // Status: New Component
   // Dependencies: Button from @/components/common/Button
   
   import { Button } from '@/components/common/Button';
   
   interface LoginFormProps {
     onSubmit: (credentials: Credentials) => Promise<void>;
   }
   
   export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
     // Implementation
   };
   ```

   b. Existing Component:
   ```typescript
   // Using: apps/frontend/components/common/Button.tsx
   // No modifications needed
   import { Button } from '@/components/common/Button';
   ```

   c. Modified Component:
   ```typescript
   // Modifying: apps/frontend/components/layout/Header.tsx
   // Adding: Login button integration
   import { LoginButton } from '@/components/auth/LoginButton';
   
   // Add to existing component:
   <div className="flex items-center">
     <LoginButton />
   </div>
   ```
```

### Bad Story Example
```
Add login
- Create form
- Add API
- Test it
```

## Task Creation Example
```markdown
8. User Authentication Implementation
   8.2. Frontend Implementation
      8.2.1. Create login form component
      8.2.2. Implement auth service
      8.2.3. Add form validation
      8.2.4. Create error handling
      8.2.5. Write component tests
```
