import React, { useState, useCallback } from "react";
import { isEmpty } from "lodash";
import Track from "../../atoms/Track";
import TrackSearch from "../../atoms/TrackSearch";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import { ArtistSelectDrawer, SelectedTrackWrapper } from "./StyledComponents";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TrackSelector = ({
  onAddTrack,
  onRemoveTrack,
  value = null,
  defaultOpen = false,
  showAddTrackButton = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const [track, setTrack] = useState(value);

  const handleChange = useCallback(
    (_track) => {
      setTrack(_track);
      setOpen(false);
      onAddTrack(_track);
    },
    [onAddTrack]
  );

  const removeTrack = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onRemoveTrack(track);
      setTrack(null);
    },
    [track, onRemoveTrack]
  );

  return (
    <div>
      {isEmpty(track) ? (
        <div>
          {showAddTrackButton && (
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              color="primary"
              startIcon={<Add />}
              disableElevation
            >
              Select Track
            </Button>
          )}
          <ArtistSelectDrawer
            open={open}
            anchor="right"
            onClose={() => setOpen(false)}
          >
            <TrackSearch onTrackSelect={handleChange} autoFocus={open} />
          </ArtistSelectDrawer>
        </div>
      ) : (
        <SelectedTrackWrapper>
          <Track track={track} />
          <IconButton aria-label="delete" onClick={removeTrack}>
            <DeleteIcon />
          </IconButton>
        </SelectedTrackWrapper>
      )}
    </div>
  );
};

export default TrackSelector;
