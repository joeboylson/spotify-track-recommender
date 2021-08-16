import { get } from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const SpotifyAuthFlow = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const openAuth = () => {
    window.localStorage.setItem(
      "playlist",
      JSON.stringify({ name, description })
    );

    get("/api/client_id").then(({ data }) => {
      const clientId = data.data;
      const redirectUri = `https://spotifytrackrecommender.herokuapp.com/create_playlist`;
      const scope = `user-read-private%20user-read-email%20playlist-modify-private`;
      const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
      window.open(url, "_self");
    });
  };

  const disabled = !name || !description;
  const tracks = window.localStorage.getItem("tracks");

  if (!tracks) return <Redirect to="/" />;

  return (
    <div>
      <input onChange={e => setName(e.target.value)} placeholder="Playlist Name"></input>
      <input
        onChange={e => setDescription(e.target.value)}
        placeholder="Playlist Desciption"
      ></input>

      <button disabled={disabled} onClick={openAuth}>
        CREATE PLAYLIST
      </button>
    </div>
  );
};

export default SpotifyAuthFlow;
