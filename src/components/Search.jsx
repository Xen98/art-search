import React, {useState} from "react"

function Search( {setArtQuery} ){
  
  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
  }

  const handleInputSearch = (e) => {
    e.preventDefault();
    
    if (inputSearch.trim().length > 2) {
      setArtQuery( inputSearch );
    }

    setInputSearch('');
  }

  return(
    <div className="search">
      <form className="search__form" onSubmit={handleInputSearch}> 
        <input 
        className="search__input" 
        type="text" 
        id="searchInput" 
        value={inputSearch} 
        onChange={handleInputChange}
        placeholder='Search...'
        />

      </form>
    </div>
  );
}

export default Search
