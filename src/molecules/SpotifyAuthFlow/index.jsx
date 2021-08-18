import { get } from "axios";
import React from "react";
import { Redirect } from "react-router-dom";
import SpotifyUser from "../../atoms/SpotifyUser";
import { useSpotifyUser } from "../../hooks/useSpotifyUser";
import { CreatePlaylistWrapper } from "./StyledComponents";
import CreatePlaylist from "../../organisms/CreatePlaylist";
import { Button } from "@material-ui/core";

const SpotifyAuthFlow = () => {
  const { spotifyUser } = useSpotifyUser();

  const openAuth = () => {
    get("/api/client_id").then(({ data }) => {
      const clientId = data.data;
      const redirectUri = `https://spotifytrackrecommender.herokuapp.com/tracks`;
      const scope = encodeURIComponent(
        "user-read-private user-read-email playlist-modify-private playlist-modify-public"
      );
      const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
      window.open(url, "_self");
    });
  };

  const tracks = window.localStorage.getItem("tracks");

  if (!tracks) return <Redirect to="/" />;

  return (
    <div>
      {spotifyUser ? (
        <CreatePlaylistWrapper>
          <SpotifyUser spotifyUser={spotifyUser.user} />
          <CreatePlaylist spotifyUser={spotifyUser} />
        </CreatePlaylistWrapper>
      ) : (
        <CreatePlaylistWrapper>
          <h3>Want to save these songs as a playlist?</h3>
          <p>
            Clicking "Authenticate With Spotify" will redirect you to Spotify's
            main login page. After this, you
          </p>
          <i>
            Don't worry, your data and your Spotify account are safe. You're
            login is only used to see your Spotify account and create a playlist
            (if you choose to do so).
          </i>
          <Button variant="contained" color="primary" onClick={openAuth}>
            Authenticate With Spotify
          </Button>
        </CreatePlaylistWrapper>
      )}
    </div>
  );
};

export default SpotifyAuthFlow;
