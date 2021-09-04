import { Button } from "@material-ui/core";
import { range } from "lodash";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import TrackSelector from "../../../molecules/TrackSelector";

const SearchAndSelectTracks = ({control}) => {

  const [numberOfTracks, setNumberOfTracks] = useState(1);

  const incrementNumberOfTracks = () => {
    setNumberOfTracks(numberOfTracks + 1);
  }

  return (
    <div>
      { range(0, numberOfTracks).map(i => (
        <Controller
          key={i}
          name={`seedTracks${i}`}
          control={control}
          defaultValue=""
          render={({ field }) => <TrackSelector {...field} />}
        />
      ))}

      <Button variant="contained" color="primary" onClick={incrementNumberOfTracks}>+</Button>
    </div>
  );

};

export default SearchAndSelectTracks;
