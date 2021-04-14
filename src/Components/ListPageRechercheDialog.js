import './CSS/ListPageRechercheDialog.scss'

function ListPageRechercheDialog({attr, handleClick, data, isLoading, field}) {
    if(!data){
        return(<span></span>);
    }else if(field === "spec"){
        return (
            <div className=''>
                <ul className='list-s'>
                    {data.map((dt,index) => (
                        // <li className='elem-s' key={index} >{dt.domain_name}</li
                        <li className='elem-s flex' key={index} ><input type="radio" name={field} value={dt.domain_name} id={dt.domain_name} onClick={() => handleClick(dt.domain_name)}/><label className='labelFor' htmlFor={dt.domain_name}>{dt.domain_name}</label></li>
                    ))}
                </ul>                
            </div>
        );
    }else if(field === "city"){
        return (
            <div className=''>
                <ul className='list-s'>
                    {data.map((dt,index) => (
                        // <li className='elem-s' key={index} >{dt.domain_name}</li
                        <li className='elem-s flex' key={index} ><input type="radio" name={field} value={dt.professionnal_city} id={dt.professionnal_city} onClick={() => handleClick(dt.professionnal_city)}/><label className='labelFor' htmlFor={dt.professionnal_city}>{dt.professionnal_city}</label></li>
                    ))}
                </ul>                
            </div>
        );
    }else{
        return(<span></span>);
    }
}

export default ListPageRechercheDialog;