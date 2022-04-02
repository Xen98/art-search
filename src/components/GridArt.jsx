import React from "react";
import { useFetchArt } from '../hooks/useFetchArt';
import GridArtItem from './GridArtItem';
import { SRLWrapper } from "simple-react-lightbox";

function GridArt({artQuery}){

  const art = useFetchArt( artQuery ); 

  return(
    <div className="art">
      <SRLWrapper>
        <div className="artContainer">
        {
          art.map( item => (
            <GridArtItem 
              key={item.id}
              {...item}
            />
          ))
        }
        </div>
      </SRLWrapper>
    </div>
  );
}

export default GridArt
