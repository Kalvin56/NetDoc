import './CSS/Search.scss'
import './CSS/List.scss'

function List({data, isLoading, searchText, handleClick, isActive}) {
    // console.log(data);
    if(!data || searchText.length < 1 || !isActive){
        return(<span></span>);
    }else{
        return (
            <div className='block-search'>
                <ul className='list'>
                    {data.map((dt,index) => (
                        <li className='elem' key={index} onClick={() => handleClick(dt.professional_complete_name)} >{dt.professional_complete_name}, {dt.professionnal_city} {/* <div className='demi-cercle'></div> */} {/* {'\u25D7'} */} {<span className='demi-cercle'>&#x25D7;</span>}  {<span className='domains'>{dt.professional_domain_id.map((dm,index) => ( (index > 0 ? ' / ' : ' ') + dm.domain_name ))}</span>}</li>
                    ))}
                </ul>
            </div>
        );
    }    
}

export default List;