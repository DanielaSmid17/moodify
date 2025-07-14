# Moodify - System Patterns

## Architecture Overview
Moodify follows a component-based React architecture with feature-specific organization and mood-driven theming.

## Component Organization
Components are organized in feature-specific directories under `src/components/`:

### Component Categories
- **Cards**: `cards/` - Reusable card components (PlaylistCard, etc.)
- **Controls**: `controls/` - Interactive components (MoodSelector, etc.)
- **Layout**: `layout/` - Layout and container components (ThemeContainer, etc.)

### File Structure Pattern
```
src/
├── api/          # External API integrations (Spotify)
├── components/   # React components organized by feature
├── data/         # Static data and configuration
├── store/        # State management (Zustand stores)
└── assets/       # Static assets (images, icons)
```

## Key Technical Decisions

### State Management Pattern
- **Zustand Store**: Single source of truth for mood state
- **Local Component State**: For UI-specific state
- **Props Drilling**: Minimal, using store for shared state

### API Integration Pattern
- **Centralized API Layer**: All Spotify interactions in `api/spotify.js`
- **Error Boundaries**: Graceful handling of API failures
- **Loading States**: Consistent loading patterns across components

### Theming Pattern
- **Mood-Driven Themes**: Visual themes change based on selected mood
- **CSS-in-JS**: Emotion for dynamic styling
- **Material-UI Integration**: Custom theme provider

### Component Patterns
- **Functional Components**: Arrow functions as default export
- **Custom Hooks**: For shared logic extraction
- **Composition**: Prefer composition over inheritance
- **Props Interface**: Clear prop typing for components

## File Naming Conventions
- Components: PascalCase (e.g., `PlaylistCard.jsx`)
- Hooks: camelCase with `use` prefix (e.g., `useMoodStore.js`)
- Utilities: camelCase (e.g., `moodThemes.js`)
- API modules: camelCase (e.g., `spotify.js`) 