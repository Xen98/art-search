import React from "react"

function GridArtItem({id, title, artist_title, image_id}){

  const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`

  return(
    <div className="artItem">
      <img className="artItem__img" src={image_id ? url : ''} alt={title+' / '+artist_title} />
      <div className="artItem__info">
        <p className="artItem__title">"{title}"</p>
        <p className="artItem__artist"> {artist_title} </p>
      </div>
    </div>
  );
}

export default GridArtItem
