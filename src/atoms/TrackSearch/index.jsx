import { TextField } from "@material-ui/core";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { searchTrack } from "../../utils/searchTrack";
import Track from "../Track";
import { TrackButton, TrackSearchContainer } from "./StyledComponents";

const TrackSearch = ({ onTrackSelect, autoFocus }) => {
  const [queryString, setQueryString] = useState();
  const [searchedTracks, setSearchedTracks] = useState([]);

  useEffect(() => {
    searchTrack(queryString, (_searchedTracks) => {
      setSearchedTracks(_searchedTracks);
    });
  }, [queryString]);

  const handleOnChange = useCallback((e) => {
    setQueryString(e.target.value);
  }, []);

  return (
    <TrackSearchContainer>
      <TextField
        label="Search"
        variant="filled"
        onChange={handleOnChange}
        autoFocus={autoFocus}
      />
      {searchedTracks.map((track) => {
        return (
          <TrackButton onClick={() => onTrackSelect(track)} key={track.id}>
            <Track track={track}/>
          </TrackButton>
        );
      })}
    </TrackSearchContainer>
  );
};

export default TrackSearch;
