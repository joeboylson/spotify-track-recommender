import React, { useMemo, useState } from "react";
import { Button } from "@material-ui/core";
import { range } from "lodash";
import { useCallback } from "react";
import TrackSelector from "../../../molecules/TrackSelector";
import { StepWrapper } from "../StyledComponents";

const SearchAndSelectTracks = ({ setValue, getDefaultValueProps }) => {
  const { defaultValue } = useMemo(
    () => getDefaultValueProps("seed_tracks", []),
    [getDefaultValueProps]
  );

  const [numberOfTracks, setNumberOfTracks] = useState(
    defaultValue.length || 1
  );
  const [tracks, setTracks] = useState(defaultValue || []);

  const handleTracksChange = useCallback(
    (_tracks) => {
      if (_tracks.length > 0) {
        setValue("seed_tracks", _tracks);
      } else {
        setValue("seed_tracks", null);
      }
    },
    [setValue]
  );

  const addTrack = useCallback(
    (_track) => {
      const _tracks = [...tracks, _track];
      setTracks(_tracks);
      handleTracksChange(_tracks);
    },
    [handleTracksChange, tracks]
  );

  const removeTrack = useCallback(
    (_track) => {
      const _tracks = tracks.filter((t) => t.id !== _track.id);
      setTracks(_tracks);
      handleTracksChange(_tracks);
    },
    [handleTracksChange, tracks]
  );

  const incrementNumberOfTracks = () => {
    setNumberOfTracks(numberOfTracks + 1);
  };

  return (
    <StepWrapper>
      {range(0, numberOfTracks).map((i) => (
        <TrackSelector
          key={i}
          onAddTrack={addTrack}
          onRemoveTrack={removeTrack}
          value={tracks[i]}
          defaultOpen={i > 0}
        />
      ))}

      {numberOfTracks < 5 && 
        <Button
          variant="contained"
          color="primary"
          onClick={incrementNumberOfTracks}
        >
          Select {tracks.length > 0 ? "another" : "a"} Track
        </Button>
      }
    </StepWrapper>
  );
};

export default SearchAndSelectTracks;
