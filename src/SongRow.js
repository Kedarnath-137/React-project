import React from 'react';
import './SongRow.css';
function SongRow({ track }) {
  return (
    <div className="songRow">
      {/* <img className= 'songRow__ablum'src= {track.ablum.images[0].url}></img> */}
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
