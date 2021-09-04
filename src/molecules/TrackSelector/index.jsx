import React, { useState, useCallback, forwardRef } from "react";
import { isEmpty } from "lodash";
import Track from "../../atoms/Track";
import TrackSearch from "../../atoms/TrackSearch";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import { ArtistSelectDrawer, SelectedTrackWrapper } from "./StyledComponents";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TrackSelector = forwardRef( (props, ref) => {

  const { onChange, value = null } = props;

  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState(value);

  const handleChange = useCallback(
    (track) => {
      setTrack(track);
      setOpen(false);
      onChange(track);
    },
    [onChange]
  );

  const removeTrack = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setTrack(null);
    onChange(null)
  }, [onChange])

  return (
    <div>
      {isEmpty(track) ? (
        <div>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            color="primary"
            startIcon={<Add />}
            disableElevation
          >
            Select Track
          </Button>
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
});

export default TrackSelector;
