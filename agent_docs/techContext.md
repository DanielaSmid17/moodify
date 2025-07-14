# Moodify - Technical Context

## Technologies Used

### Frontend Framework
- **React 19.1.0**: Core UI framework with latest features
- **Vite 7.0.4**: Build tool and development server for fast development

### UI and Styling
- **Material-UI (@mui/material 7.2.0)**: Component library for consistent design
- **Emotion (@emotion/react, @emotion/styled)**: CSS-in-JS for styled components
- **Framer Motion 12.23.5**: Animation library for smooth transitions and mood-based animations

### State Management
- **Zustand 5.0.6**: Lightweight state management for global app state

### API Integration
- **Axios 1.10.0**: HTTP client for Spotify API communication

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **TypeScript Support**: @types packages for React components

## Development Setup
- **Node.js**: Required for package management
- **Yarn**: Package manager (yarn.lock present)
- **Environment Variables**: .env file for API keys (Spotify credentials)

## Technical Constraints
- Spotify API rate limits
- OAuth flow for Spotify authentication
- Browser-based application (no server-side rendering)
- Responsive design requirements
- Performance considerations for animations 