# Technical Rules & Standards

## Code Style & Formatting

- Use TypeScript strict mode (`"strict": true` in tsconfig.json)
- Maximum line length: 100 characters
- Indentation: 2 spaces
- No trailing whitespace
- End files with a newline
- Use single quotes for strings
- Add trailing commas in objects and arrays
- Semicolons required
- Do not specify explicit return types for React components (let TypeScript infer them)
```typescript
// Good
export const Component = ({ prop }: Props) => {
  return <div>{prop}</div>;
};

// Bad
export const Component = ({ prop }: Props): JSX.Element => {
  return <div>{prop}</div>;
};
```

### Naming Conventions

#### Variables & Functions
- camelCase for variables and functions
- Use verb prefixes for functions (get, set, handle, update, etc.)
- Boolean variables should start with is/has/should
```typescript
// Good
const getUserData = () => {};
const isLoading = true;
const handleSubmit = () => {};

// Bad
const data = () => {};
const loading = true;
const submit = () => {};
```

#### Components
- PascalCase for component names
- Use suffix for specific types of components
```typescript
// Good
UserCard.tsx
ButtonGroup.tsx
DataProvider.tsx
useWindowSize.ts  // Hooks

// Bad
usercard.tsx
button_group.tsx
```

#### Files & Folders
- kebab-case for file names (except components)
- Meaningful directory names describing their purpose
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── ui-utils.ts
│   └── features/
├── hooks/
│   └── use-window-size.ts
└── utils/
    └── string-helpers.ts
```

## Project Structure

```
src/
├── app/          # App router pages and layouts
├── components/   # Reusable components
│   ├── ui/      # Basic UI components
│   └── features/ # Feature-specific components
├── lib/         # Utilities and helpers
└── types/       # TypeScript type definitions
```

## Component Guidelines

- Use functional components with TypeScript
- Implement proper prop typing
- Keep components small and focused
- Use composition over inheritance
- Extract reusable logic into custom hooks
- Implement error boundaries where necessary
- Use Tailwind CSS exclusively for styling
  - No CSS Modules
  - No styled-components
  - No inline styles
  - Maintain consistent spacing using Tailwind spacing scale
  - Use Tailwind color palette for consistency
  - Extract common class combinations into @apply directives when needed

## Component Structure

```typescript
// Standard Component Structure
interface ComponentProps {
  // Props interface
}

export const Component = ({ prop1, prop2 }: ComponentProps) => {
  // Hooks at the top
  // Local state
  // Derived state
  // Event handlers
  
  return (
    <div className="flex items-center">
      {/* Use Tailwind classes for styling */}
    </div>
  );
};
```

## State Management

- Use React Context for global state when needed
- Keep state as close to where it's used as possible
- Implement proper loading states
- Use proper state management patterns

## Testing Requirements

- Write unit tests for all new components
- Implement integration tests for critical paths
- Use Jest and React Testing Library
- Maintain minimum 80% test coverage
- Write meaningful test descriptions
- Mock external dependencies

## Testing Patterns

```typescript
// Component Test Structure
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup
  });

  it('should render successfully', () => {
    // Test
  });

  describe('when specific condition', () => {
    it('should behave accordingly', () => {
      // Test
    });
  });
});
```

## Performance Guidelines

- Implement proper code splitting
- Use Image component for optimized images
- Implement proper caching strategies
- Use dynamic imports when necessary
- Optimize bundle size
- Implement proper loading states
- Use proper meta tags for SEO

## Git Workflow

- Use feature branches
- Write meaningful commit messages
- Follow conventional commits
- Review code before merging
- Keep PRs small and focused
- Update documentation when necessary

## Git Commit Conventions

### Commit Message Format
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting, missing semicolons, etc.
- refactor: Code changes that neither fixes a bug nor adds a feature
- test: Adding tests
- chore: Updating build tasks, package manager configs, etc.

### Examples
```
feat(ui): add carousel component
fix(layout): correct grid spacing
docs(readme): update setup instructions
refactor(components): optimize card rendering
```

### Branch Naming
```
feature/carousel
bugfix/grid-spacing
docs/update-guide
```

## Accessibility

- Follow WCAG 2.1 guidelines
- Use semantic HTML
- Implement proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain proper color contrast

## Security

- Keep dependencies updated
- Use Content Security Policy
- Implement proper client-side validation
- Follow frontend security best practices
