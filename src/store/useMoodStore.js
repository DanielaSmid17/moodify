import { create } from 'zustand';

export const useMoodStore = create((set) => ({
  mood: 'happy',
  setMood: (mood) => set({ mood }),
  playlists: [],
  setPlaylists: (playlists) => set({ playlists }),
}));
