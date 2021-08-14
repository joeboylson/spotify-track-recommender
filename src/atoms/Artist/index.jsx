import React, { useMemo } from 'react';
import { ArtistContainer } from './StyledComponents';

const Artist = ({artist}) => {

  const src = useMemo(() => {
    if (!artist) return "";
    const artistImage = artist.images[0]
    return artistImage ? artistImage.url : 'https://via.placeholder.com/640?text=No Artist Image';

  }, [artist])

  const artistName = useMemo(() => artist.name, [artist])

  return (
    <ArtistContainer>
      <img src={src}></img>
      <p>{artistName}</p>
    </ArtistContainer>
  );

}

export default Artist;

