import medical from "../Assets/medical.json";
import Lottie from 'react-lottie-player'
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Search from "../Components/Search";
import List from "../Components/List";
import { config } from '../config.js';

function Accueil() {


  const history = useHistory();

  const [dataState, setDataState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
  });

  const [dataDomainsState, setDataDomainsState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
  });

  const [dataCitiesState, setDataCitiesState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
});

  const[searchState, setSearchState] = useState("");

  const[listActiveState, setListActiveState] = useState(false);

  useEffect(() => {
    setDataState({ loading: true});
    const apiUrl = config.apiUrl + `professionals`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setDataState({ loading: false, data: data, dataFiltre:data });
      });
  }, [setDataState]);

  useEffect(() => {
    setDataDomainsState({ loading: true});
    const apiUrl = config.apiUrl + `domains`;
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            setDataDomainsState({ loading: false, data: data, dataFiltre: data });
        });
  }, [setDataDomainsState]);

  useEffect(() => {
    setDataCitiesState({ loading: true});
    const apiUrl = config.apiUrl + `professionals/cities`;
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            setDataCitiesState({ loading: false, data: data, dataFiltre: data });
        });
  }, [setDataCitiesState]);

  function handleChange(e){
    if(!listActiveState){
      setListActiveState(true);
    }
    let val = e.target.value;
    //medecins
      let filtre = dataState.dataFiltre;
      if(dataState.data){
        filtre = dataState.data;
        if (val && val.trim() !== ''){
          filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
        }
        filtre = filtre.slice(0,5);
      }
      setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre})
    //specialités
      filtre = dataDomainsState.dataFiltre;
      if(dataDomainsState.data){
        filtre = dataDomainsState.data;
        if (val && val.trim() !== ''){
          filtre = filtre.filter(term => term.domain_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
        }
        filtre = filtre.slice(0,2);
      }
      setDataDomainsState({loading : dataDomainsState.loading, data: dataDomainsState.data, dataFiltre : filtre})
    //villes
      filtre = dataCitiesState.dataFiltre;
      if(dataCitiesState.data){
        filtre = dataCitiesState.data;
        if (val && val.trim() !== ''){
          filtre = filtre.filter(term => term.professionnal_city.toLowerCase().indexOf(val.toLowerCase()) > -1 );
        }
        filtre = filtre.slice(0,2);
      }
      setDataCitiesState({loading : dataCitiesState.loading, data: dataCitiesState.data, dataFiltre : filtre})
    setSearchState(val);
  }

  // function stringToSlug(Text)
  // {
  //     return Text
  //         .toLowerCase()
  //         .replace(/ /g,'-')
  //         ;
  // }

  function handleClick(newSearch){
    setListActiveState(false);// permet d'enlever l'affichage de la list lors du clic sur un élément de celle-ci
    setSearchState(newSearch); 
  }

  function handleClickDom(specialite){
    setListActiveState(false);
    history.push('/recherche', {specialite} );
  }

  function handleClickCit(ville){
    setListActiveState(false);
    history.push('/recherche', {ville} );
  }

  function goPageSearch(e){
    e.preventDefault();// supprime le message : Form submission canceled because the form is not connected react
    history.push('/recherche', {searchState});
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
                  <Search placeHolder="Médecin, spécialité, ville" searchText={searchState} handleChange={handleChange}></Search>
                  <List data={dataState.dataFiltre} domains={dataDomainsState.dataFiltre} villes={dataCitiesState.dataFiltre} isActive={listActiveState} isLoading={dataState.loading} searchText={searchState} handleClick={handleClick} handleClickDom={handleClickDom} handleClickCit={handleClickCit}  ></List>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
    
export default Accueil;