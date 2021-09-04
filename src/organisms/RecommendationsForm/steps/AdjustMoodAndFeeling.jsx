import React from "react";
// import Acousticness from "../inputs/Acousticness";
// import Danceability from "../inputs/Danceability";
// import DurationMs from "../inputs/DurationMs";
// import Energy from "../inputs/Energy";
// import Instrumentalness from "../inputs/Instrumentalness";
// import Liveness from "../inputs/Liveness";
// import Loudness from "../inputs/Loudness";
// import Popularity from "../inputs/Popularity";
// import Speechiness from "../inputs/Speechiness";
// import Tempo from "../inputs/Tempo";
// import TimeSignature from "../inputs/TimeSignature";
// import Valence from "../inputs/Valence";
// import GenreSelect from "../../molecules/GenreSelect";
import { Controller } from "react-hook-form";
import { Slider } from "@material-ui/core";

const AdjustMoodAndFeeling = ({control}) => {

  return (
    <div>

      <Controller
        name="acousticness"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Slider
            {...field}
            min={0}
            max={1}
            step={0.01}
            defaultValue={[0.25, 0.75]}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        )}
      />

      {/* <GenreSelect onChange={setKeyAtIndex("seed_genres", 0)} />
      <Acousticness onChange={setMinMax("acousticness")} />
      <Danceability onChange={setMinMax("danceability")} />
      <Energy onChange={setMinMax("energy")} />
      <Instrumentalness onChange={setMinMax("instrumentalness")} />
      <Liveness onChange={setMinMax("liveness")} />
      <Loudness onChange={setMinMax("loudness")} />
      <Speechiness onChange={setMinMax("speechiness")} />
      <Valence onChange={setMinMax("valence")} />

      <DurationMs onChange={setMinMax("duration_ms")} />
      <Popularity onChange={setMinMax("popularity")} />
      <Tempo onChange={setMinMax("tempo")} />
      <TimeSignature onChange={setMinMax("time_signature")} /> */}

      {/* 
      TODO: fix these inputs
      <Key onChange={setKey("key")} />
      <Mode onChange={setKey("mode")} /> 
      */}
    </div>
  );
};

export default AdjustMoodAndFeeling;
