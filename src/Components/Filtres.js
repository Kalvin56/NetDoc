function Filtres({spec,city, handleDeleteSpec, handleDeleteCity}) {
    if(!spec && !city){
        return(<span></span>);
    }else{

        const styleSpecialite = {
            display : spec ? 'flex' : 'none'
        }

        const styleVille = {
            display : city ? 'flex' : 'none',
            marginLeft : spec ? '15px' : '0px'
        }        

        return(
            <div className='flex padding-bottom'>
                <div style={styleSpecialite} className='filtre'><span>Spécialité : {spec}</span> <button onClick={handleDeleteSpec}>X</button></div>
                <div style={styleVille} className='filtre'><span>Ville : {city}</span> <button onClick={handleDeleteCity}>X</button></div>
            </div>
        );
    }  
}

export default Filtres;