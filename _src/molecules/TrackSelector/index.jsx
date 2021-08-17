import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import Drawer from '../../atoms/Drawer';
import Track from '../../atoms/Track';
import TrackSearch from '../../atoms/TrackSearch';

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
          <button onClick={() => setOpen(true)}>Open</button>
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

