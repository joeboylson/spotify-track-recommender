import { useEffect, useState } from "react"
import { get } from "axios"
import { isEmpty } from "lodash";

const decodeHash = (hash) => {
  if (isEmpty(hash)) return null;

  const _hash = hash.substring(1);

  const hashObj = {};
  _hash.split("&").forEach((i) => {
    const [key, value] = i.split("=");
    hashObj[key] = value;
  });

  if (hashObj.error) return null;
  return hashObj;
};

export const useSpotifyUser = () => {

  const [spotifyUser, setSpotifyUser] = useState(null)
  const hash = decodeHash(window.location.hash);

  useEffect(() => {
    if (spotifyUser || !hash) return;
    get(`https://api.spotify.com/v1/me?access_token=${hash.access_token}`)
    .then( ({data}) => setSpotifyUser({user: data, hash}))
    .catch(e => console.log("ERROR useSpotifyUser:", e));
  }, [hash, spotifyUser])

  return { spotifyUser }
};