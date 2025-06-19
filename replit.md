# Cipaa STEI-K - Educational Coding Game

## Overview

Cipaa STEI-K is an interactive educational web game designed to teach HTML, CSS, and JavaScript fundamentals to absolute beginners. The game features Ipul, a friendly hamster mentor, who guides players through coding missions in a supportive, stress-free environment. The application uses a modern full-stack architecture with React on the frontend and Express.js on the backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: Custom React hooks with local state
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom pastel color palette
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for server-side bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Centralized schema definitions in shared directory
- **Validation**: Zod schemas for type-safe data validation
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Key Components

### Game Engine Components
1. **GameState Hook** (`useGameState.tsx`): Central game state management including mission progression, code validation, and character states
2. **Mission System**: Structured learning progression with HTML, CSS, and JavaScript challenges
3. **Code Editor** (`CodeEditor.tsx`): Real-time code input with syntax highlighting simulation
4. **Visual Pane** (`VisualPane.tsx`): Live code execution and rendering environment
5. **Dialogue System** (`DialogueSystem.tsx`): Interactive character communication system

### Educational Features
- **Split-screen interface**: Code editor on right, visual output on left
- **Real-time validation**: Immediate feedback without technical error messages  
- **Hint system**: Gentle, encouraging guidance when code doesn't validate
- **Mission progression**: Structured learning path from basic HTML to interactive JavaScript

### UI/UX Design
- **Pastel Color Scheme**: Soft pink, blue, green, and yellow for friendly aesthetics
- **Character Animations**: Dynamic Ipul states (happy, confused, neutral)
- **Responsive Design**: Mobile-friendly layout with collapsible navigation
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Data Flow

1. **Mission Loading**: Game initializes with predefined mission array containing validation functions and dialogue
2. **Code Input**: Player types code in the editor, triggering real-time updates
3. **Validation Pipeline**: Code is validated against current mission criteria
4. **Visual Rendering**: Valid code is dynamically rendered in the visual pane using DOM manipulation
5. **State Updates**: Success/failure updates character state and dialogue
6. **Progression**: Successful missions advance to next challenge

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Framework**: Radix UI primitives with Shadcn/ui abstractions
- **Database**: Drizzle ORM, Neon Database serverless PostgreSQL
- **Development Tools**: Vite, TypeScript, Tailwind CSS, PostCSS

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Replit Integration**: Cartographer plugin and runtime error overlay
- **Hot Reload**: Vite middleware integration with Express server

## Deployment Strategy

### Development Mode
- **Command**: `npm run dev`
- **Process**: TSX executes TypeScript server directly
- **Features**: Hot module replacement, source maps, development middleware

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server to `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Environment**: Production Node.js execution

### Database Management
- **Schema**: Drizzle migrations in `./migrations` directory
- **Push Command**: `npm run db:push` for schema updates
- **Connection**: Environment variable `DATABASE_URL` required

## Changelog

```
Changelog:
- June 19, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```