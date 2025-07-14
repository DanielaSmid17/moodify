import React, { useEffect } from 'react';
import ThemeContainer from './components/layout/ThemeContainer';
import MoodSelector from './components/controls/MoodSelector';
import { getMoodPlaylists } from './api/spotify';
import { useMoodStore } from './store/useMoodStore';
import { Typography, Container, Box } from '@mui/material';
import PlaylistCard from './components/cards/PlaylistCard';
import { Grid } from '@mui/material';

const App = () => {
  const mood = useMoodStore((state) => state.mood);
  const setPlaylists = useMoodStore((state) => state.setPlaylists);
  const playlists = useMoodStore((state) => state.playlists);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await getMoodPlaylists(mood);
      console.log(data)
      setPlaylists(data);
    };
    fetchPlaylists();
  }, [mood, setPlaylists]);

  return (
    <ThemeContainer>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Moodify 🎧
        </Typography>
        <Typography align="center" mb={4}>
          What’s your mood today?
        </Typography>

        <MoodSelector />

        <Box mt={5}>
        <Grid container spacing={2} justifyContent="center">
          {playlists.map((playlist) => (
            <Grid item key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </Grid>
          ))}
        </Grid>
          {/* PlaylistCards will go here */}
        </Box>
      </Container>
    </ThemeContainer>
  );
};

export default App;
