import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import Drawer from '../../atoms/Drawer';
import Track from '../../atoms/Track';
import TrackSearch from '../../atoms/TrackSearch';
import { Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

const TrackSelector = ({onChange}) => {

  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if (!track) return onChange(null);
    return onChange(track.id);
  }, [track]);

  return (
    <div>

      { isEmpty(track) ? (
        <div>
          <Button 
            variant="contained"
            onClick={() => setOpen(true)}
            color="primary"
            startIcon={<Add/>}
            disableElevation
          >Select Track</Button>
          <Drawer open={open}>
            <TrackSearch onTrackSelect={setTrack} autoFocus={open}/>
            <button onClick={() => setOpen(false)}>Close</button>
          </Drawer>
        </div>
      ) : (
        <Track track={track}/>
      ) }
    </div>
  );

}

export default TrackSelector;

