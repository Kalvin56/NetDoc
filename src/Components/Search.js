import './CSS/Search.scss'

function Search({searchText,handleChange,placeHolder}) {
    return (
        <div className='block-search'>
            <input type="search" className='search' placeholder={placeHolder} value={searchText} onChange={handleChange}/>
            <input type="submit" className='submit' value="Rechercher"/>
        </div>
    );
  }  
export default Search;