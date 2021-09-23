import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useGenres } from "../../hooks/useGenres";

const toCapitalizedWords = (name) => {
  var words = name.match(/[A-Za-z][a-z]*/g) || [];

  return words.map(capitalize).join(" ");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

const GenreSelect = ({ onChange }) => {
  const { loading, genres } = useGenres();

  return (
    <FormControl variant="filled">
      <InputLabel id="genrelabel">Genre</InputLabel>
      <Select
        disabled={loading}
        labelId="genrelabel"
        variant="filled"
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {genres && genres.map((g) => {
          return <MenuItem key={g} value={g}>{toCapitalizedWords(g)}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default GenreSelect;
