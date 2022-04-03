import React from "react";
import { useFetchArt } from '../hooks/useFetchArt';
import GridArtItem from './GridArtItem';
import { SRLWrapper } from "simple-react-lightbox";

function GridArt({artQuery}){

  const art = useFetchArt( artQuery ); 

  return(
    <div className="art">
      <SRLWrapper>
        <h2 className="art__query">{artQuery.query || ''}</h2>
        <div className="artContainer">
        {
          art.length > 0 ?
          art.map( item => (
            item.image_id &&
            <GridArtItem 
              key={item.id}
              {...item}
            />
          ))

          :

          'No artwork found'
        }
        </div>
      </SRLWrapper>
    </div>
  );
}

export default GridArt
