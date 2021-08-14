import React, { useState, useCallback, useEffect, useRef } from 'react';
import { searchTrack } from '../../utils/searchTrack';
import { TrackSearchContainer } from './StyledComponents';

const TrackSearch = ({onTrackSelect, autoFocus}) => {

  const [queryString, setQueryString] = useState();
  const [searchedTracks, setSearchedTracks] = useState([]);

  useEffect(() => {
    searchTrack(queryString, _searchedTracks => {
      setSearchedTracks(_searchedTracks)
    });
  }, [queryString])

  const handleOnChange = useCallback((e) => {
    setQueryString(e.target.value)
  }, []);

  return (
    <TrackSearchContainer>
      <p>{queryString}</p>
      <input onChange={handleOnChange} autoFocus={autoFocus}/>

      { searchedTracks.map(track => {
        return (
          <button onClick={() => onTrackSelect(track)} key={track.id}>
            <p>{track.name}: {track.artists.map(a => a.name).join(", ")}</p>
          </button>
        )
      }) }

    </TrackSearchContainer>
  );

}

export default TrackSearch;

