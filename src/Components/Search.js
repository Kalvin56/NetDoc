import './CSS/Search.scss'
import {IoArrowForwardCircleSharp} from 'react-icons/io5'

function Search({searchText,handleChange,placeHolder}) {
    return (
        <div className='block-search flex'>
            <input type="search" className='search' placeholder={placeHolder} value={searchText} onChange={handleChange}/>
            <button className='submit flex-center'><span>Rechercher</span><IoArrowForwardCircleSharp className='icon'/></button>
        </div>
    );
  }  
export default Search;