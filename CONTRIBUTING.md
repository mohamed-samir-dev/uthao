# Contributing to Uthao

Thank you for your interest in contributing to Uthao! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct.

### Our Standards

- **Be respectful** and inclusive in all interactions
- **Be collaborative** and help others learn and grow
- **Be constructive** when giving feedback
- **Be patient** with newcomers and questions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- Git knowledge
- Basic understanding of React, Next.js, and TypeScript
- Familiarity with Tailwind CSS

### Development Setup

1. **Fork and clone the repository**
```bash
git clone https://github.com/your-username/uthao.git
cd uthao
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Add your environment variables
```

4. **Start development server**
```bash
npm run dev
```

5. **Create a new branch**
```bash
git checkout -b feature/your-feature-name
```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use strict typing, avoid `any` types
- **Components**: Use functional components with hooks
- **Naming**: Use PascalCase for components, camelCase for functions
- **Files**: Use kebab-case for file names
- **Imports**: Use absolute imports with `@/` prefix

### Component Structure

```typescript
// components/ExampleComponent/ExampleComponent.tsx
'use client'
import { motion } from 'framer-motion'
import { ComponentProps } from './types'

export function ExampleComponent({ prop1, prop2 }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="example-class"
    >
      {/* Component content */}
    </motion.div>
  )
}

// components/ExampleComponent/index.ts
export { ExampleComponent } from './ExampleComponent'
export type { ComponentProps } from './types'
```

### CSS Guidelines

- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Use **semantic class names** when custom CSS is needed
- Maintain **consistent spacing** using Tailwind's scale

### Animation Guidelines

- Use **Framer Motion** for animations
- Keep animations **subtle and purposeful**
- Ensure animations are **accessible** (respect `prefers-reduced-motion`)
- Use consistent **easing and duration**

## 🐛 Bug Reports

### Before Submitting

1. **Search existing issues** to avoid duplicates
2. **Test on the latest version**
3. **Check if it's already fixed** in development

### Bug Report Template

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
Add screenshots if applicable.

**Environment**
- OS: [e.g. Windows 11, macOS 13]
- Browser: [e.g. Chrome 120, Safari 17]
- Device: [e.g. Desktop, iPhone 14]
- Version: [e.g. 1.0.0]
```

## ✨ Feature Requests

### Before Submitting

1. **Check existing feature requests**
2. **Consider the scope** and alignment with project goals
3. **Think about implementation** complexity

### Feature Request Template

```markdown
**Feature Description**
A clear description of the feature.

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Screenshots, mockups, or examples.
```

## 🔄 Pull Request Process

### Before Creating a PR

1. **Ensure your branch is up to date**
```bash
git checkout main
git pull origin main
git checkout your-branch
git rebase main
```

2. **Run tests and linting**
```bash
npm run lint
npm run test
npm run build
```

3. **Test your changes thoroughly**
   - Test on different screen sizes
   - Test with different browsers
   - Test accessibility features

### PR Guidelines

- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Link related issues** using keywords (fixes #123)
- **Add screenshots** for UI changes
- **Keep PRs focused** - one feature/fix per PR
- **Write meaningful commit messages**

### PR Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Screenshots
Add screenshots for UI changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings introduced
```

## 🧪 Testing Guidelines

### Unit Tests

- Write tests for **utility functions**
- Test **component behavior**, not implementation
- Use **descriptive test names**
- Aim for **high coverage** on critical paths

### Integration Tests

- Test **user workflows**
- Test **API integrations**
- Test **form submissions**
- Test **navigation flows**

### Manual Testing

- Test on **multiple devices**
- Test **accessibility** with screen readers
- Test **performance** on slower devices
- Test **offline functionality**

## 📚 Documentation

### Code Documentation

- **Comment complex logic**
- **Document component props** with TypeScript
- **Add JSDoc** for utility functions
- **Update README** for new features

### Commit Messages

Follow conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

Examples:
```
feat(auth): add Google OAuth integration
fix(ui): resolve mobile menu overlay issue
docs(readme): update installation instructions
```

## 🏗️ Project Structure

### Adding New Components

1. Create component directory in appropriate section
2. Include TypeScript types
3. Add index.ts for clean exports
4. Update parent component imports

### Adding New Pages

1. Create page in `src/app/` directory
2. Add to navigation if needed
3. Update sitemap.ts
4. Add SEO metadata

### Adding New Utilities

1. Add to `src/utils/` or `src/lib/`
2. Include TypeScript types
3. Write unit tests
4. Document usage

## 🚀 Release Process

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] Version number bumped
- [ ] Changelog updated
- [ ] Performance tested
- [ ] Security reviewed

## 🆘 Getting Help

### Resources

- **Documentation**: Check the README and code comments
- **Issues**: Search existing issues for solutions
- **Discussions**: Use GitHub Discussions for questions

### Contact

- **Email**: mohammedsamiermouawad@gmail.com
- **LinkedIn**: [Mohammed Samier Mouawad](https://www.linkedin.com/in/mohammed-samier-mouawad/)

## 🎯 Areas for Contribution

### High Priority

- **Performance optimizations**
- **Accessibility improvements**
- **Mobile responsiveness**
- **Test coverage**
- **Documentation**

### Feature Ideas

- **Multi-language support**
- **Advanced tracking features**
- **Integration with shipping APIs**
- **Enhanced analytics**
- **PWA improvements**

### Good First Issues

Look for issues labeled:
- `good first issue`
- `help wanted`
- `documentation`
- `bug`

## 📄 License

By contributing to Uthao, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Uthao! Your efforts help make global logistics more accessible and efficient. 🚢✨