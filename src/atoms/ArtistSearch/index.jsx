import React, { useState, useCallback, useEffect } from 'react';
import { searchArtist } from '../../utils/searchArtist';
import { ArtistSearchContainer } from './StyledComponents';

const TrackSearch = ({onArtistSelect, autoFocus}) => {

  const [queryString, setQueryString] = useState();
  const [searchedArtists, setSearchedArtists] = useState([]);

  useEffect(() => {
    searchArtist(queryString, _searchedArtists => {
      setSearchedArtists(_searchedArtists)
    });
  }, [queryString])

  const handleOnChange = useCallback((e) => {
    setQueryString(e.target.value)
  }, []);

  return (
    <ArtistSearchContainer>
      <input onChange={handleOnChange} autoFocus={autoFocus}/>

      { searchedArtists.map(artist => {
        return (
          <button onClick={() => onArtistSelect(artist)} key={artist.id}>
            <p>{artist.name}</p>
          </button>
        )
      }) }

    </ArtistSearchContainer>
  );

};

export default TrackSearch;

