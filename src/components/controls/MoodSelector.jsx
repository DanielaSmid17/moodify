import React from 'react';
import { useMoodStore } from '../../store/useMoodStore';
import { moodThemes } from '../../data/moodThemes';
import { Stack, Button } from '@mui/material';

const MoodSelector = () => {
  const mood = useMoodStore((state) => state.mood);
  const setMood = useMoodStore((state) => state.setMood);

  return (
    <Stack spacing={2} alignItems="center">
      <Stack direction="row" spacing={2}>
        {Object.entries(moodThemes).slice(0, 2).map(([key, moodObj]) => (
          <Button
            key={key}
            variant={mood === key ? 'contained' : 'outlined'}
            onClick={() => setMood(key)}
            sx={{
              borderColor: '#fff',
              color: '#fff',
              '&:hover': { backgroundColor: '#ffffff22' },
              width: 120
            }}
          >
            {moodObj.label}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" spacing={2}>
        {Object.entries(moodThemes).slice(2, 4).map(([key, moodObj]) => (
          <Button
            key={key}
            variant={mood === key ? 'contained' : 'outlined'}
            onClick={() => setMood(key)}
            sx={{
              borderColor: '#fff',
              color: '#fff',
              '&:hover': { backgroundColor: '#ffffff22' },
              width: 120
            }}
          >
            {moodObj.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default MoodSelector;
