import React, { useCallback } from "react";
import CreatePlaylist from "../../organisms/CreatePlaylist";
import SpotifyUser from "../../atoms/SpotifyUser";
import { get } from "axios";
import { Redirect } from "react-router-dom";
import { useSpotifyUser } from "../../hooks/useSpotifyUser";
import { CreatePlaylistWrapper } from "./StyledComponents";
import { Button } from "@material-ui/core";

const SpotifyAuthFlow = () => {
  const { spotifyUser } = useSpotifyUser();
  const tracks = window.localStorage.getItem("tracks");

  const openAuth = useCallback(() => {
    get("/api/client_id").then(({ data }) => {
      const clientId = data.data;
      const redirectUri = `https://spotifytrackrecommender.herokuapp.com/tracks`;

      const scope = encodeURIComponent(
        "user-read-private user-read-email playlist-modify-private playlist-modify-public"
      );
      const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
      window.open(url, "_self");
    });
  }, [])

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
            main login page. Follow the steps Spotify provides and we'll see you back here.
          </p>
          <p>
            If you've authenticated before, you will not be redirected but will be
            given the option to name and save the playlist right away.
          </p>
          <i>
            Don't worry, your data and your Spotify account are safe. Your
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
