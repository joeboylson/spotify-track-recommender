import { Avatar } from "@material-ui/core";
import React, { useMemo } from "react";
import { SpotifyUserContainer } from "./StyledComponents";

const SpotifyUser = ({ spotifyUser }) => {
  const src = useMemo(() => {
    if (!spotifyUser) return "";
    const userAvatar = spotifyUser.images[0];
    return userAvatar
      ? userAvatar.url
      : "https://via.placeholder.com/640?text=No Avatar";
  }, [spotifyUser]);

  const username = useMemo(
    () => spotifyUser && spotifyUser.display_name,
    [spotifyUser]
  );

  if (!spotifyUser) return null;

  return (
    <SpotifyUserContainer>
      <Avatar alt={username} src={src} />
      <p>Hey there, {username}</p>
    </SpotifyUserContainer>
  );
};

export default SpotifyUser;
