# Node TypeScript Boilerplate

A modern, production-ready Node.js TypeScript boilerplate with best practices for quick project startup.

## Features

- TypeScript 5.x configuration
- ESLint with TypeScript support
- Prettier code formatting
- Jest testing framework
- Winston logging
- Environment variable management
- GitHub Actions CI workflow
- Husky git hooks
- Development hot reload

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and adjust values
4. Run `npm run dev` for development
5. Run `npm run build` for production build

## Scripts

- `npm start` - Run the compiled application
- `npm run dev` - Start development with hot reload
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run format` - Format code

## Project Structure

- `/src` - Source code
  - `/config` - Configuration management
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions
- `/tests` - Test files
- `/dist` - Compiled files (generated)

## Playground

This directory is for experimental TypeScript files and quick tests.

### Usage

1. Create a new TypeScript file in this directory
2. Run it using either:
   - `npm run play src/playground/your-file.ts`
   - Or add a dedicated script in package.json:
     ```json
     "scripts": {
       "play:yourfile": "ts-node-dev --respawn --transpile-only src/playground/your-file.ts"
     }
     ```

### Examples
Check example.ts for a sample playground file.