import { CircularProgress } from "@material-ui/core";

function MedecinAffichage({data, isLoading}) {
    // console.log(data);
    // console.log(isLoading);
    if(!data && !isLoading){
        return(<span></span>);
    }else if(isLoading){
        return(<CircularProgress />)
    }else{
        return (
            <div>
                Le medecin est {data.professional_complete_name}
            </div>
        );
    }
}

export default MedecinAffichage;