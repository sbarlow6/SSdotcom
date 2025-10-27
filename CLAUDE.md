# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Sorcery Slam website - an Angular 18.2 application that serves as the marketing/landing page for the Sorcery Slam puzzle game. The site is built using Angular's standalone components architecture with Bootstrap for styling.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:4200/)
npm start
# or
ng serve

# Build for production (outputs to dist/sorcery-slam/)
npm run build
# or
ng build

# Run unit tests with Karma
npm test
# or
ng test

# Build and watch for changes
npm run watch
# or
ng build --watch --configuration development

# Generate new components/services/etc
ng generate component component-name
ng generate service service-name
```

## Architecture

The application follows Angular 18's standalone component architecture:

- **Entry Point**: `src/main.ts` bootstraps the application using `bootstrapApplication()` with the root `AppComponent`
- **Configuration**: `src/app/app.config.ts` provides the application-wide configuration including routing setup
- **Routing**: Currently empty (`src/app/app.routes.ts`) - single-page landing site
- **Main Component**: `src/app/app.component.ts` - standalone component that serves as the root
- **Styling**: Global styles in `src/styles.css`, component-specific in `app.component.css`, uses Bootstrap 5.3

## Key Dependencies

- **Angular 18.2**: Core framework using standalone components
- **Bootstrap 5.3**: CSS framework for responsive layout
- **RxJS 7.8**: Reactive programming (Angular dependency)
- **TypeScript 5.5**: Type-safe JavaScript

## Assets Structure

- `src/assets/fonts/`: Custom fonts including Sorcery-Slam-Regular and source-sans-pro
- `src/assets/images/`: Game artwork, icons, and animations (GIFs for items, PNGs for static images)

## Build Configuration

The Angular build is configured in `angular.json`:
- Production builds have budget limits (500kB initial, 1MB max)
- Assets and styles are properly included in builds
- Source maps enabled for development builds