function Filtres({spec, handleDeleteSpec}) {
    if(!spec){
        return(<span></span>)
    }else{
        return (
            <div>
                Spécialité : {spec} <button onClick={handleDeleteSpec}>X</button>
            </div>
        );
    }    
}

export default Filtres;