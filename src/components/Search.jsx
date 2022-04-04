import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search( {setArtQuery} ){
  
  const [inputSearch, setInputSearch] = useState('');
  const [inputMax, setInputMax] = useState(10);

  const handleInputSeachChange = (e) => {
    setInputSearch(e.target.value);
  }

  const handleAddMax = () => {
    (inputMax + 1 <= 30) && setInputMax(inputMax + 1);
  }

  const handleSubtractMax = () => {
    (inputMax - 1 >= 1) && setInputMax(inputMax - 1);
  }

  const handleInputMaxChange = (e) => {
    const eInput = e.target.value;

    if (!/^(|\d)+$/.test(eInput)) return;

    const eNumber = parseInt(eInput);

    if (eNumber >= 0 && eNumber <= 30) {
      setInputMax(eInput);  
    } else if (eInput == '') {
      setInputMax(eInput);
    }
  }

  const handleInputSearch = (e) => {
    e.preventDefault();
    
    if (inputSearch.trim().length > 2 && inputMax != '' && inputMax > 0 && inputMax <= 30) {

      setArtQuery( {query: inputSearch, limit: inputMax} );
      setInputSearch('');
    }

  }

  return(
    <div className="search">

      <form className="search__form" onSubmit={handleInputSearch}>

        <div className="search__container">
          <input 
          className="search__input" 
          type="text" 
          id="searchInput" 
          value={inputSearch} 
          onChange={handleInputSeachChange}
          placeholder='Search...'
          />
          <div className="search__icon-container" onClick={handleInputSearch}>
            <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
          </div>
        </div>

         
        <div>
          <span className="search__max-button" onClick={handleSubtractMax}>-</span>
          <input
          className="search__max-input"
          type="text"
          id="maxInput"
          value={inputMax}
          onChange={handleInputMaxChange}
          placeholder='Max 30'
          inputMode="numeric"
          />
          <span className="search__max-button" onClick={handleAddMax}>+</span>
        </div>

        <input type="submit" hidden />

        <span className="search__max-label"> Limit search </span>
        </form>

    </div>
  );
}

export default Search
