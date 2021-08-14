import React from "react";
import Acousticness from "../inputs/Acousticness";
import Danceability from "../inputs/Danceability";
import DurationMs from "../inputs/DurationMs";
import Energy from "../inputs/Energy";
import Instrumentalness from "../inputs/Instrumentalness";
import Key from "../inputs/Key";
import Liveness from "../inputs/Liveness";
import Loudness from "../inputs/Loudness";
import Mode from "../inputs/Mode";
import Speechiness from "../inputs/Speechiness";
import Tempo from "../inputs/Tempo";
import TimeSignature from "../inputs/TimeSignature";
import Valence from "../inputs/Valence";

const Recommendations = () => {

  return (
    <div
      style={{
        padding: "64px",
        display: "flex",
        flexDirection: "column",
        gap: "48px"
      }}
    >

      <Acousticness onChange={value => console.log('acousticness', value)} />
      <Danceability onChange={value => console.log('danceability', value)} />
      <DurationMs onChange={value => console.log('duration_ms', value)} />
      <Energy onChange={value => console.log('energy', value)} />
      <Instrumentalness onChange={value => console.log('instrumentalness', value)} />
      <Key onChange={value => console.log('key', value)} />
      <Liveness onChange={value => console.log('liveness', value)} />
      <Loudness onChange={value => console.log('loudness', value)} />
      <Mode onChange={value => console.log('mode', value)} />
      <Speechiness onChange={value => console.log('speechiness', value)} />
      <Tempo onChange={value => console.log('tempo', value)} />
      <TimeSignature onChange={value => console.log('time_signature', value)} />
      <Valence onChange={value => console.log('valence', value)} />
    </div>
  );
};

export default Recommendations;
