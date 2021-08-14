import React, { useMemo } from 'react';
import { TrackContainer } from './StyledComponents';

const Track = ({track}) => {

  const src = useMemo(() => {
    if (!track) return "";

    const trackImage = track.album.images[0]    
    return trackImage ? trackImage.url : 'https://via.placeholder.com/640?text=No Track Image';

  }, [track])

  const trackName = useMemo(() => track.name, [track])
  const trackArtists = useMemo(() => track.artists.map(a => a.name).join(', '), [track])

  return (
    <TrackContainer>
      <img src={src}></img>
      <p> <b>{trackName}:</b> {trackArtists}</p>
    </TrackContainer>
  );

}

export default Track;

