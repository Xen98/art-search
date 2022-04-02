
export const getArt = async ( artQuery ) => {

  const url = `https://api.artic.edu/api/v1/artworks/search?q=${artQuery}&limit=9&fields=id,title,image_id,artist_title`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  
  return data;
}
