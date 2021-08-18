import React, { useState, useCallback } from "react";
import { post } from "axios";
import { isEmpty } from "lodash";
import { Button, Snackbar, TextField } from "@material-ui/core";
import { PlaylistForm } from "./StyledComponents";
import Alert from "@material-ui/lab/Alert";

const CreatePlaylist = ({ spotifyUser }) => {
  const [createdPlaylist, setCreatedPlaylist] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null)

  const tracks = window.localStorage.getItem("tracks");

  const handleError = useCallback((e) => {
    console.error(e);
    setLoading(false);
  }, []);

  const createPlaylistFromLocalStorage = () => {
    setLoading(true);
    if (!tracks) return console.log("NO TRACKS");

    const tracksObj = JSON.parse(tracks);
    const trackUris = tracksObj.map((t) => t.uri);

    post(
      `https://api.spotify.com/v1/users/${spotifyUser.user.id}/playlists?access_token=${spotifyUser.hash.access_token}`,
      { name, description }
    )
      .then((playlistData) => {
        const playlist = playlistData.data;
        post(
          `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?access_token=${spotifyUser.hash.access_token}`,
          { uris: trackUris }
        )
          .then(() => {
            setLoading(false);
            setCreatedPlaylist(playlist);
            setNotification({
              message: `Created New Playlist called "${playlist.name}"`,
              severity: "success"
            })
          })
          .catch(handleError);
      })
      .catch(handleError);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      {/* Notification */}
      <Snackbar
        open={!isEmpty(notification)}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setNotification(null)}
      >
        <div>
          {notification && <Alert severity={notification.severity}>
            { notification.message }
          </Alert>}
        </div>
      </Snackbar>

      {createdPlaylist ? (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              window.open(createdPlaylist.external_urls.spotify, "_blank")
            }
          >
            Open "{createdPlaylist.name}" on Spotify
          </Button>
        </div>
      ) : (
        <PlaylistForm>
          <p>
            Enter a playlist name and description and we'll create you a
            playlist with all the tracks you see below.
          </p>

          <TextField
            label="* Playlist Name"
            variant="filled"
            onChange={handleNameChange}
          />
          <TextField
            label="Playlist Description"
            variant="filled"
            onChange={handleDescriptionChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={createPlaylistFromLocalStorage}
            disabled={isEmpty(name) || loading}
          >
            Save Playlist
          </Button>
        </PlaylistForm>
      )}
    </div>
  );
};

export default CreatePlaylist;
