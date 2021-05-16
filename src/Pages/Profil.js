import { useEffect, useState } from "react";
import { http } from "../axios-create";
import { CircularProgress } from "@material-ui/core";
import DoctorProfil from "../Components/DoctorProfil";
import PatientProfil from "../Components/PatientProfil";
import '../Components/CSS/Profil.scss';

function Profil() {

  const [dataState, setDataState] = useState({
    loading: false,
    data: null
  });

  useEffect( () => {
    setDataState({ loading: true});
    http.get(localStorage.getItem('category') + 's/' + localStorage.getItem('access_id'))
    .then((response) => {
      if(response){
      setDataState({ loading: false, data: response.data });
      }
    })
    .catch((error) => {
      console.log(error);
    })
  },[setDataState]);

  if(dataState.data){

    return (
      <div className="background-white height-full-adapt">
        <div className="content">
          {localStorage.getItem('category') === "patient" ? <PatientProfil data={dataState.data}/> :  <DoctorProfil data={dataState.data}/>}
        </div>
      </div>
    );

  }else{
    return (
      <div className="background-white height-full-adapt">
        <div className="content">
          <CircularProgress></CircularProgress>
        </div>
      </div>
    );
  }
}
  
export default Profil;