import './CSS/ListPageRecherche.scss'

function ListSearchPageRecherche({data,spec, isLoading, handleClick}) {
    if(!data){
        return(<span></span>);
    }else{
        return (
            <div className=''>
                <ul className='list-s'>
                    {data.map((dt,index) => (
                        // <li className='elem-s' key={index} >{dt.domain_name}</li>
                        <li className='elem-s flex' key={index} ><input type="radio" name="spec" value={dt.domain_name} id={dt.domain_name} onClick={() => handleClick(dt.domain_name)}/><label className='labelFor' htmlFor={dt.domain_name}>{dt.domain_name}</label></li>
                    ))}
                </ul>
                
            </div>
        );
    }
}

export default ListSearchPageRecherche;