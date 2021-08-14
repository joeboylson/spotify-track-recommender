import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import Drawer from '../../atoms/Drawer';
import Artist from '../../atoms/Artist';
import ArtistSearch from '../../atoms/ArtistSearch';

const ArtistSelector = () => {

  const [open, setOpen] = useState(false);
  const [artist, setArtist] = useState(null);

  return (
    <div>

      { isEmpty(artist) ? (
        <div>
          <button onClick={() => setOpen(true)}>Open</button>
          <Drawer open={open}>
            <ArtistSearch onArtistSelect={setArtist} autoFocus={open}/>
            <button onClick={() => setOpen(false)}>Close</button>
          </Drawer>
        </div>
      ) : (
        <Artist artist={artist}/>
      ) }
    </div>
  );

}

export default ArtistSelector;

