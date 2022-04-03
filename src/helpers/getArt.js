
export const getArt = async ( {query, limit} ) => {

  const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=${limit}&fields=id,title,image_id,artist_title`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  
  return data;
}
