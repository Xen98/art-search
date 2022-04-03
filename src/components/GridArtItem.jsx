import React from "react"

function GridArtItem({title, artist_title, image_id}){

  const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`

  return(
    <div className="artItem">
      <div className="artItem__img-container">
        <img className="artItem__img" src={image_id ? url : ''} alt={title+' / '+artist_title} />
      </div>
      <div className="artItem__info">
        <p className="artItem__title">"{title || 'Untitled'}"</p>
        <p className="artItem__artist"> {artist_title || 'Unknown'} </p>
      </div>
    </div>
  );
}

export default GridArtItem
