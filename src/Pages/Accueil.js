import medical from "../Assets/medical.json";
import Lottie from 'react-lottie-player'
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Search from "../Components/Search";
import List from "../Components/List";

function Accueil() {

  // const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const [appState, setAppState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
    searchText: ""
  });

  console.log(appState);  

  useEffect(() => { 
    console.log('hey');
    setAppState({ loading: true, searchText:"" });
    const apiUrl = `http://localhost:8000/api/professionals`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loading: false, data: data, dataFiltre:data, searchText:"" });
      });
  }, [setAppState]);

  function handleChange(e){
    let val = e.target.value;
    let filtre = appState.dataFiltre;
    if(appState.data){
      filtre = appState.data;
      if (val && val.trim() !== ''){
        filtre = filtre.filter(term => term.professional_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      }
      filtre = filtre.slice(0,5);
    }
    setAppState({loading : appState.loading, data: appState.data, dataFiltre : filtre, searchText : val})  
  }

  function goPageSearch(e){
    e.preventDefault();// supprime le message : Form submission canceled because the form is not connected react
    history.push('/Recherche/' + appState.searchText);
  }

  return (
    <div>
      <div className="block-accueil flex">
        <div className="content">
          <div className="accueil-flex">
            <div className="block-accueil-left">
              <h1 className="title-accueil">NetDoc</h1>
              <h1 className="slogan">Site de prise de rendez-vous en ligne</h1>
              <Lottie
                play
                animationData={medical}
                loop
                className = "lottie-anim"                    
              />
            </div>
            <div className="block-accueil-right flex-center">
              <form className='form' onSubmit={goPageSearch}>
                  <Search placeHolder="Nom du médecin" searchText={appState.searchText} handleChange={handleChange}></Search>
                  <List data={appState.dataFiltre} isLoading={appState.loading}></List>
              </form>
              {/* {appState.dataFiltre ? appState.dataFiltre.map(dt => (
                        dt.professional_name
                    )) : "no data"} */}
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
    
export default Accueil;