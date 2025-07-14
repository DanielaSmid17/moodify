import React from 'react';
import { useMoodStore } from '../../store/useMoodStore';
import { moodThemes } from '../../data/moodThemes';
import { Box } from '@mui/material';

const ThemeContainer = ({ children }) => {
  const mood = useMoodStore((state) => state.mood);
  const theme = moodThemes[mood];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme?.background || '#fff',
        color: '#fff',
        padding: 2,
        transition: 'background 0.5s ease',
      }}
    >
      {children}
    </Box>
  );
};

export default ThemeContainer;
