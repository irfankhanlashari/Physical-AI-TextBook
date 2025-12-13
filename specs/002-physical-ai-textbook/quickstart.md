# Quickstart Guide: Physical AI Textbook Development

## Overview
This guide provides a quick setup and development workflow for the Physical AI textbook project. It covers initial setup, content creation, and deployment processes.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- Basic knowledge of Markdown/MDX syntax
- Understanding of Physical AI concepts (ROS 2, Digital Twins, etc.)

## Initial Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm start
```
This will start a local development server at `http://localhost:3000` with hot reloading.

## Content Creation Workflow

### 1. Create New Chapter
1. Create a new MDX file in the `docs/` directory:
   ```bash
   touch docs/chX-topic.mdx
   ```

2. Add basic structure:
   ```md
   ---
   id: chX-topic
   title: Chapter X - Topic Name
   sidebar_position: X
   ---

   # Chapter X: Topic Name

   ## Learning Objectives
   - Objective 1
   - Objective 2

   ## Content
   Your chapter content here...

   ## Code Examples
   import CodeBlock from '@theme/CodeBlock';
   import { pythonCode } from './code-examples/python';

   <CodeBlock language="python">{pythonCode}</CodeBlock>

   ## Key Concepts
   - Concept 1
   - Concept 2
   ```

### 2. Add Code Examples
1. Create code examples in the `docs/code-examples/` directory
2. Reference them in your MDX files using import statements
3. Ensure all code examples are tested and functional

### 3. Update Navigation
1. Edit `sidebars.js` to add your new chapter to the navigation
2. Ensure the sidebar position matches the chapter sequence

## Development Commands

### Local Development
```bash
npm start
```
Starts local development server with hot reloading.

### Build for Production
```bash
npm run build
```
Creates a production build in the `build/` directory.

### Serve Production Build Locally
```bash
npm run serve
```
Serves the production build locally for testing.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys to GitHub Pages using configured settings.

## Content Guidelines

### Markdown/MDX Standards
- Use proper heading hierarchy (#, ##, ###)
- Code blocks must include language tags
- Use tables for hardware specifications and comparisons
- Include image placeholders with alt text

### Code Example Standards
- Test all code examples before adding
- Include comments explaining key concepts
- Follow best practices for the respective technology
- Verify examples work with current documentation

### Citation Standards
- Use markdown links for all references
- Link to official documentation when possible
- Include version information when relevant
- Example: [ROS 2 Documentation](https://docs.ros.org/)

## Deployment Process

### GitHub Actions Deployment
1. Push changes to the main branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy
3. Site will be available at `https://<username>.github.io/<repository>`

### Manual Deployment
1. Run `npm run build`
2. The `build/` directory contains the static site
3. Deploy the contents to your preferred hosting service

## Testing Checklist

### Before Submitting Content
- [ ] All code examples have been tested and are functional
- [ ] Content follows educational formatting standards
- [ ] All references are valid markdown links
- [ ] Navigation is properly configured
- [ ] Content is accessible to students with basic Python/AI knowledge
- [ ] Chapter includes learning objectives and key concepts
- [ ] Tables and other elements render correctly

### Before Deployment
- [ ] Site builds without errors (`npm run build`)
- [ ] All links are functional
- [ ] Navigation works correctly
- [ ] Mobile responsiveness is verified
- [ ] Demo video is included and accessible

## Troubleshooting

### Common Issues
- **Build errors**: Check MDX syntax and ensure all imports are valid
- **Broken links**: Verify all markdown links are properly formatted
- **Code examples not working**: Test examples in appropriate environment
- **Navigation not showing**: Check `sidebars.js` configuration

### Getting Help
- Check the official Docusaurus documentation
- Review the project constitution for standards and principles
- Consult the feature specification for requirements