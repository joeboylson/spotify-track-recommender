import React, { useCallback, useEffect, useState } from "react";
import { get, post } from "axios";

import tracks from "../Recommendations/data.json";
import { isEmpty } from "lodash";

const decodeHash = (hash) => {
  if (isEmpty(hash)) return null;

  const _hash = hash.substring(1);

  const hashObj = {};
  _hash.split("&").forEach((i) => {
    const [key, value] = i.split("=");
    hashObj[key] = value;
  });

  if (hashObj.error) {
    return null;
  }

  return hashObj;
};

const CreatePlaylist = () => {
  const [playlist, setPlaylist] = useState(null);

  const createPlaylistFromLocalStorage = () => {
    const hash = decodeHash(location.hash);
    const tracks = window.localStorage.getItem("tracks");
    const playlist = window.localStorage.getItem("playlist");

    if (!hash) return console.log("NO HASH");
    if (!tracks) return console.log("NO TRACKS");
    if (!playlist) return console.log("NO PLAYLIST");

    const tracksObj = JSON.parse(tracks);
    const playlistObj = JSON.parse(playlist);
    const trackUris = tracksObj.map((t) => t.uri);

    get(`https://api.spotify.com/v1/me?access_token=${hash.access_token}`).then(
      (userData) => {
        const user = userData.data;
        post(
          `https://api.spotify.com/v1/users/${user.id}/playlists?access_token=${hash.access_token}`,
          playlistObj
        ).then((playlistData) => {
          const playlist = playlistData.data;
          post(
            `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?access_token=${hash.access_token}`,
            { uris: trackUris }
          ).then( result => {
            window.localStorage.removeItem("tracks");
            window.localStorage.removeItem("playlist");
            setPlaylist(result)
          })
        });
      }
    );
  };

  return (
    <div>
      {playlist ? (
        <p>{JSON.stringify(playlist)}</p>
      ) : (
        <button onClick={createPlaylistFromLocalStorage}>
          CREATE PLAYLIST
        </button>
      )}
    </div>
  );
};

export default CreatePlaylist;
