import React, { useState, useEffect } from 'react';

// styles
import './styles.scss';

// utils
import { useRecommendations } from '../utils/useRecommendations';
import { useSpotifyGenres } from '../utils/useSpotifyGenres';

const Recommendations = () => {

  const [recommendations, setRecommendations] = useState([]);
  const [genres, setGenres] = useState([]);
  const [spotifyId, setSpotifyId] = useState(null)

  const [paramMaxPopularity, setParamMaxPopularity] = useState(50);

  let params = {
    maxPopularity: paramMaxPopularity
  }

  const getRecommendations = () => {
    useRecommendations(params)
    .then(_recommendations => setRecommendations(_recommendations))
  }

  useEffect(() => {
    getRecommendations();
    useSpotifyGenres().then(_genres => setGenres(_genres))
  }, [])

  return (  
    <div>

      <button onClick={getRecommendations}>Get Recommendations</button>

      <label htmlFor="maxPopularity">Max Popularity</label>
      <input 
        name="maxPopularity"
        type="number" 
        min={0} 
        max={100}
        onChange={e => setParamMaxPopularity(e.target.value)}
      />

      { recommendations.map((track, index) => {

        let { album, artists, name, id } = track;

        return (
          <div key={`track-${index}`} className={'track'}>

            <p onClick={() => setSpotifyId(id)}>Play</p>
            <a href={`https://open.spotify.com/track/${id}`}>Open in Spotify</a>

            <div className={'info'}>
              <h3 className={'title'}>Artists:</h3>
              <div className={'data'}>
                { artists.map((artist, index) => {
                  return <p key={`artist-${index}`}>{artist.name}</p>
                })}
              </div>
            </div>

            <div className={'info'}>
              <h3 className={'title'}>Album:</h3>
              <p className={'data'}>{album.name}</p>
            </div>

            <div className={'info'}>
              <h3 className={'title'}>Track:</h3>
              <p className={'data'}>{name}</p>
            </div>

          </div>
        )
      })}

      { spotifyId && 
        <div>
          <iframe
              src={`https://open.spotify.com/embed/track/${spotifyId}`}
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
          ></iframe> 
        </div>
      }

    </div>
  );

}

export default Recommendations;

