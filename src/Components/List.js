function List({data, isLoading}) {
    // console.log(data);
    if(!data){
        return(<p>No data</p>);
    }else{
        return (
            <div>
                    {data.map(dt => (
                        dt.professional_name
                    ))}
            </div>
        );
    }    
}

export default List;