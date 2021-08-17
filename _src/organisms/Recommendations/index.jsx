import React from "react";
import Track from "../../atoms/Track";
import SpotifyAuthFlow from "../../molecules/SpotifyAuthFlow";

import { RecommendationsWrapper } from "./StyledComponents";

const Recommendations = () => {
  const tracksString = window.localStorage.getItem('tracks');
  const tracks = tracksString && JSON.parse(tracksString)

  return (
    <RecommendationsWrapper>
      {tracks && tracks.map((track) => <Track key={track.id} track={track} />)}
      <SpotifyAuthFlow/>
    </RecommendationsWrapper>
  );
};

export default Recommendations;
