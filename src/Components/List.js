import './CSS/Search.scss'
import './CSS/List.scss'

function List({data, isLoading, searchText}) {
    // console.log(data);
    if(!data || searchText.length < 1){
        return(<span></span>);
    }else{
        return (
            <div className='block-search'>
                <ul className='list'>
                    {data.map(dt => (
                        <li className='elem'>{dt.professional_name}</li>
                    ))}
                </ul>
            </div>
        );
    }    
}

export default List;