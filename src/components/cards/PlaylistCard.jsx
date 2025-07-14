import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const PlaylistCard = ({ playlist }) => {
  const { name, images, external_urls } = playlist;
  const image = images?.[0]?.url;

  return (
    <Card
      sx={{
        width: 250,
        backgroundColor: '#ffffff22',
        backdropFilter: 'blur(8px)',
        color: '#fff',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 4,
      }}
    >
      {image && (
        <CardMedia component="img" height="140" image={image} alt={name} />
      )}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {name}
        </Typography>
        <Button
          size="small"
          variant="outlined"
          href={external_urls.spotify}
          target="_blank"
          sx={{ color: '#fff', borderColor: '#fff', mt: 1 }}
        >
          Open in Spotify
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
