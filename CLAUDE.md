# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start
```

### Code Quality
```bash
# Run all linting checks
npm run lint

# Auto-fix linting issues
npm run lint:fix

# TypeScript type checking
npm run typecheck
```

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage

# Run a specific test file
npm test -- ArticleList.test.tsx
```

### Panda CSS
```bash
# Generate Panda CSS utilities (runs automatically on prepare)
npx panda codegen

# Watch for Panda CSS changes during development
npx panda --watch
```

### Storybook
```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

## Architecture Overview

### Next.js App Router Structure
- **Route Groups**: `(blog)` directory groups blog-related pages
- **Dynamic Routes**: `[category]`, `[id]`, `[page]` for flexible routing
- **Static Generation**: Uses `generateStaticParams()` for article pages
- **ISR**: Revalidates content every 3600 seconds

### Component Architecture
Two-tier component system:
- **`src/components/features/`**: Business logic components (ArticleList, Header, Pagination, Profile)
- **`src/components/ui/`**: Reusable UI components with Panda CSS recipes

### MicroCMS Integration
- **Client**: Configured in `src/lib/microcms.ts`
- **Environment Variables**: `MICROCMS_SERVICE_DOMAIN` and `MICROCMS_API_KEY` required
- **Content Types**: Articles, Categories, Parent Categories
- **API Functions**: `getList()`, `getBlogPost()`, `getMenu()`, `getPaths()`

### Panda CSS System
- **Recipe Pattern**: Use Config Recipe (not Atomic Recipe/cva)
- **Component Styling**: Each UI component has a `.recipe.ts` file
- **Generated Files**: `styled-system/` directory contains generated utilities
- **Best Practices**: Leverage CSS variables in base styles, separate concerns with logical variants

## Development Guidelines

### Component Development
- Follow feature/ui separation pattern
- Each UI component should include: implementation, recipe, tests, and stories
- Use server components by default, client components only when necessary
- Create small, reusable components following Single Responsibility Principle

### Styling with Panda CSS
- Use Config Recipe pattern for component variants
- Leverage CSS variables in base styles for easier theming
- Don't mix styles with complex selectors - use logical variants
- Use `compoundVariants` property for complex style combinations

### TypeScript
- Use TypeScript exclusively (no JavaScript)
- Use type aliases instead of interfaces for consistency
- Leverage strict typing for MicroCMS API responses

### Testing
- Write unit tests for all components using Jest and React Testing Library
- Don't use Vitest - stick with Jest
- Test component behavior, rendering, and variants
- Aim for comprehensive test coverage

### Accessibility
- Use semantic HTML elements
- Implement proper ARIA attributes with React Aria Components
- Ensure keyboard navigation support

## File Structure Patterns

### Component Structure
```
src/components/ui/ComponentName/
├── ComponentName.tsx          # Component implementation
├── ComponentName.test.tsx     # Tests
├── ComponentName.stories.tsx  # Storybook stories
└── componentName.recipe.ts    # Panda CSS recipe
```

### Page Structure
```
src/app/
├── (blog)/                    # Route group
│   ├── [category]/page/[page] # Dynamic category pagination
│   └── article/[id]           # Article detail pages
├── layout.tsx                 # Root layout
└── page.tsx                   # Homepage
```

## Environment Setup
- Requires MicroCMS credentials in `.env.local`
- Panda CSS codegen runs on `npm run prepare`
- Husky handles pre-commit hooks for code quality
- Git hooks run ESLint, Prettier, and TypeScript checks

## Key Configuration Files
- `panda.config.ts`: Panda CSS configuration with custom tokens
- `next.config.ts`: Next.js configuration
- `jest.config.ts`: Testing configuration with jsdom environment
- `eslint.config.mjs`: ESLint rules including Storybook plugin