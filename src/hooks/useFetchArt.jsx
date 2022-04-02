import {useEffect, useState} from "react"
import {getArt} from "../helpers/getArt";

export const useFetchArt = (artQuery) => {

  const [state, setState] = useState([]);

  useEffect( () => {
    getArt(artQuery)
      .then(setState);
  }, [artQuery]);

  return state;
}
