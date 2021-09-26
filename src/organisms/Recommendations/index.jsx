import React from "react";
import Track from "../../atoms/Track";
import SpotifyAuthFlow from "../../molecules/SpotifyAuthFlow";
import { IconButton } from "@material-ui/core";
import { Audiotrack } from "@material-ui/icons";
import { getLocalStorage } from "../../utils/localStorage";
import { Redirect } from "react-router-dom";
import { RecommendationsWrapper, TrackWrapper } from "./StyledComponents";

const Recommendations = () => {
  const tracks = getLocalStorage("playlistTracks");
  if (!tracks) return <Redirect to="/" />;

  console.log(tracks)

  return (
    <RecommendationsWrapper>
      <SpotifyAuthFlow />
      <p>{tracks ? tracks.length : "No"} Tracks</p>
      {tracks &&
        tracks.map((track) => (
          <TrackWrapper key={track.id}>
            <Track track={track} />
            <IconButton
              aria-label="open in spotify"
              onClick={() => window.open(track.external_urls.spotify)}
            >
              <Audiotrack />
            </IconButton>
          </TrackWrapper>
        ))}
    </RecommendationsWrapper>
  );
};

export default Recommendations;
