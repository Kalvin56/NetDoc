function Filtres({spec,city, handleDeleteSpec, handleDeleteCity}) {
    if(!spec && !city){
        return(<span></span>);
    }else if(spec && !city){
        return (
            <div>
                Spécialité : {spec} <button onClick={handleDeleteSpec}>X</button>
            </div>
        );
    }else if(spec && city){
        return (
            <div>
                Spécialité : {spec} <button onClick={handleDeleteSpec}>X</button>
                Ville : {city} <button onClick={handleDeleteCity}>X</button>
            </div>
        );
    }else if(!spec && city){
        return (
            <div>
                Ville : {city} <button onClick={handleDeleteCity}>X</button>
            </div>
        );
    }else{
        return(<span></span>);
    }    
}

export default Filtres;