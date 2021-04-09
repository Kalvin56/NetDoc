import './CSS/SearchPageRecherche.scss';
import { FaCity, FaNotesMedical } from "react-icons/fa";

function SearchPageRecherche({searchText,handleChange,placeHolder}) {
    return (
        <div className='block-search-page flex'>
            <input type="search" className='search-page' placeholder={placeHolder} value={searchText} onChange={handleChange}/>
            <button className='btn-s flex-center'><span><FaCity className='icon-s'/> Ville</span></button>
            <button className='btn-s flex-center'><span><FaNotesMedical className='icon-s'/>Spécialité</span></button>
        </div>
    );
}

export default SearchPageRecherche;