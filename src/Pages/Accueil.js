import medical from "../Assets/medical.json";
import Lottie from 'react-lottie-player'
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Search from "../Components/Search";
import List from "../Components/List";

function Accueil() {


  const history = useHistory();

  const [dataState, setDataState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
  });

  const[searchState, setSearchState] = useState("");

  const[listActiveState, setListActiveState] = useState(false);

  useEffect(() => {
    setDataState({ loading: true});
    const apiUrl = `http://localhost:8000/api/professionals`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setDataState({ loading: false, data: data, dataFiltre:data });
      });
  }, [setDataState]);

  function handleChange(e){
    if(!listActiveState){
      setListActiveState(true);
    }
    let val = e.target.value;
    let filtre = dataState.dataFiltre;
    if(dataState.data){
      filtre = dataState.data;
      if (val && val.trim() !== ''){
        filtre = filtre.filter(term => term.professional_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      }
      filtre = filtre.slice(0,5);
    }
    setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre})
    setSearchState(val);  
  }

  function handleClick(newSearch){
    setListActiveState(false);
    setSearchState(newSearch); 
  }

  function goPageSearch(e){
    e.preventDefault();// supprime le message : Form submission canceled because the form is not connected react
    history.push('/Recherche/' + searchState);
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
                  <Search placeHolder="Nom du médecin" searchText={searchState} handleChange={handleChange}></Search>
                  <List data={dataState.dataFiltre} isActive={listActiveState} isLoading={dataState.loading} searchText={searchState} handleClick={handleClick} ></List>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
    
export default Accueil;