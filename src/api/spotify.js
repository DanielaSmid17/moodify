import axios from 'axios';

let cachedToken = null;
let tokenExpires = 0;

export const getAccessToken = async () => {
  if (cachedToken && Date.now() < tokenExpires) return cachedToken;

  const auth = btoa(
    `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
  );

  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({ grant_type: 'client_credentials' }),
    {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  cachedToken = res.data.access_token;
  tokenExpires = Date.now() + res.data.expires_in * 1000;
  return cachedToken;
};

const moodSearchMap = {
    happy: 'feel good upbeat pop',
    sad: 'melancholy chill acoustic',
    chill: 'lofi chill beats relax',
    energetic: 'high energy workout dance',
  };
  
  export const getMoodPlaylists = async (mood) => {
    const token = await getAccessToken();
    const searchTerm = moodSearchMap[mood] || mood;
  
    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=playlist&limit=6`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return res.data.playlists.items.filter(Boolean); // removes nulls
  };
  
