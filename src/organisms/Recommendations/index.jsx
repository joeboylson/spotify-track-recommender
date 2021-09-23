import { IconButton } from "@material-ui/core";
import { Audiotrack } from "@material-ui/icons";
import React from "react";
import Track from "../../atoms/Track";
import SpotifyAuthFlow from "../../molecules/SpotifyAuthFlow";

import { RecommendationsWrapper, TrackWrapper } from "./StyledComponents";

const Recommendations = () => {
  const tracksString = window.localStorage.getItem("tracks");
  const tracks = tracksString && JSON.parse(tracksString);

  return (
    <RecommendationsWrapper>
      <SpotifyAuthFlow />
      <p>{tracks.length} Tracks</p>
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
