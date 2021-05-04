import './CSS/Search.scss'
import './CSS/List.scss'

function List({data, domains, villes, isLoading, searchText, handleClick, handleClickDom, handleClickCit, isActive}) {
    // console.log(data);
    if(!data || !domains || !villes || searchText.length < 1 || !isActive){
        return(<span></span>);
    }else{

        const styleVille = {
            display : villes.length > 0 ? 'block' : 'none',
        }

        const styleSpecialite = {
            display : domains.length > 0 ? 'block' : 'none',
        }

        const styleMedecin = {
            display : data.length > 0 ? 'block' : 'none',
        }

        return (
            <div className='block-search'>
                <ul className='list'>
                    <span style={styleVille} className='title-list'>{villes.length > 1 ? "Villes" : "Ville"}</span>
                    {villes.map((dt,index) => (
                        <li className='elem' key={dt.doctor_city} onClick={() => handleClickCit(dt.doctor_city)}>{dt.doctor_city}</li>
                    ))}
                    <span style={styleSpecialite} className='title-list'>{domains.length > 1 ? "Spécialités" : "Spécialité"}</span>
                    {domains.map((dt,index) => (
                        <li className='elem' key={dt.domain_name} onClick={() => handleClickDom(dt.domain_name)}>{dt.domain_name}</li>
                    ))}
                    <span style={styleMedecin} className='title-list'>{data.length > 1 ? "Médecins" : "Médecin"}</span>
                    {data.map((dt,index) => (
                        <li className='elem' key={index} onClick={() => handleClick(dt.doctor_complete_name)} >{dt.doctor_complete_name}, {dt.doctor_city} {/* <div className='demi-cercle'></div> */} {/* {'\u25D7'} */} {<span className='demi-cercle'>&#x25D7;</span>}  {<span className='domains'>{dt.doctor_domain_id.map((dm,index) => ( (index > 0 ? ' / ' : ' ') + dm.domain_name ))}</span>}</li>
                    ))}
                </ul>
            </div>
        );
    }    
}

export default List;