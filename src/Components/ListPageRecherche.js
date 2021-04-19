import { CircularProgress } from "@material-ui/core";
import { BsPersonSquare } from "react-icons/bs";
import { MdPlace } from "react-icons/md";


function ListPageRecherche({data, isLoading, handleClickMedecin}) {
    if(!data && !isLoading){
        return(<span></span>);
    }else if(isLoading){
        return(<CircularProgress />)
    }else{
        return (
            <div>
                <div className='list-search'>
                    {data.map((dt,index) => (
                        <button className='elem-search flex' onClick={() =>handleClickMedecin(dt.professional_complete_name,dt.professional_city)} key={index} >
                            <BsPersonSquare className='icon-person'></BsPersonSquare>
                            <div className='bl-r'>
                                <span className='name'>{dt.professional_complete_name}</span>
                                <p></p>
                                <span className='domain'>{dt.professional_domain_id.map((dom, index) => (
                                    (index > 0 ? ' / ' : ' ')  + dom.domain_name 
                                ))}
                                </span>
                                <p></p>
                                <div className='flex place'>
                                    <MdPlace className="icon-place"></MdPlace>
                                    &nbsp;
                                    <span className='place-text'>{dt.professional_place}</span>
                                    <span>&nbsp;/&nbsp;</span>
                                    <span className='place-text'>{dt.professional_city}</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListPageRecherche;