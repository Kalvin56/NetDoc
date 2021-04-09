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
                        <li className='elem' key={index} onClick={() => handleClick(dt.professional_name)} >{dt.professional_name}</li>
                    ))}
                </ul>
            </div>
        );
    }    
}

export default List;