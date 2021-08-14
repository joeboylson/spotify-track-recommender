import React, { useMemo } from 'react';
import { TrackContainer } from './StyledComponents';
import { MoreVert } from '../SVG'

const Track = ({track, options}) => {

  const src = useMemo(() => {
    if (!track) return "";

    return track.album.images[0].url
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

