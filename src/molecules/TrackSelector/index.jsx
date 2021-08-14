import { findLastIndex, isEmpty } from 'lodash';
import React, { useState } from 'react';
import Drawer from '../../atoms/Drawer';
import Track from '../../atoms/Track';
import TrackSearch from '../../atoms/TrackSearch';

const TrackSelector = () => {

  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState(null);

  return (
    <div>

      { isEmpty(track) ? (
        <div>
          <button onClick={() => setOpen(true)}>Open</button>
          <Drawer open={open}>
            <TrackSearch onTrackSelect={setTrack} autoFocus={open}/>
            <button onClick={() => setOpen(findLastIndex)}>Close</button>
          </Drawer>
        </div>
      ) : (
        <Track track={track}/>
      ) }


    </div>
  );

}

export default TrackSelector;

