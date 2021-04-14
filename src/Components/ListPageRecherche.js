import { CircularProgress } from "@material-ui/core";


function ListPageRecherche({data, isLoading, handleClickMedecin}) {
    if(!data && !isLoading){
        return(<span></span>);
    }else if(isLoading){
        return(<CircularProgress />)
    }else{
        return (
            <div>
                <ul>
                    {data.map((dt,index) => (
                        <li key={index} >{dt.professional_complete_name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListPageRecherche;