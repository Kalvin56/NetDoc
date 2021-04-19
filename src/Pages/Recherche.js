import { useHistory, useLocation, /* useParams */ } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchPageRecherche from '../Components/SearchPageRecherche';
import Filtres from '../Components/Filtres';
import ListPageRecherche from '../Components/ListPageRecherche';
import {http} from '../axios-create.js';

function Recherche() {

  const history = useHistory();

  let location = useLocation();
  var text = "";
  var specialite = "";
  var ville = "";
  if(location.state){
    if(location.state.searchState){
      text = location.state.searchState;
    }
    if(location.state.specialite){
      specialite = location.state.specialite;
    }
    if(location.state.ville){
      ville = location.state.ville;
    }
  }  
  
  // var text = useParams().text;

  // function SlugToString(Text)
  // {
  //     return Text
  //         .replace('-',' ')
  //         ;
  // }

  // function capitalizeTheFirstLetterOfEachWord(words) {
  //   var separateWord = words.toLowerCase().split(' ');
  //   for (var i = 0; i < separateWord.length; i++) {
  //      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
  //      separateWord[i].substring(1);
  //   }
  //   return separateWord.join(' ');
  // }

  // if(text){
  //     text = capitalizeTheFirstLetterOfEachWord(SlugToString(text));
  // }

  const [spec, setSpec] = useState("");
  const [city, setCity] = useState("");

  const [dataState, setDataState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
  });

  const[searchState, setSearchState] = useState(text);

  useEffect(() => {
    setDataState({ loading: true});
    http.get('professionals')
    .then((response) => {
        setDataState({ loading: false, data: response.data, dataFiltre:response.data });
        let filtre = response.data;
        if(text && text.trim() !== ''){
          filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(text.toLowerCase()) > -1 );
          setDataState({loading : false, data: response.data, dataFiltre : filtre})
        }
        if(specialite && specialite.trim() !== ''){
          setSpec(specialite);
          filtre = filtre.filter(term => term.professional_domain_id[0].domain_name === specialite);
          setDataState({loading : false, data: response.data, dataFiltre : filtre}); 
        }
        if(ville && ville.trim() !== ''){
          setCity(ville);
          filtre = filtre.filter(term => term.professionnal_city === ville);
          setDataState({loading : false, data: response.data, dataFiltre : filtre}); 
        }
    })
    .catch((error) => {
      console.log(error);
    })
  }, [setDataState,setSpec,setCity, text, specialite, ville]/* Dépendances -> valeurs à observer */);

  // useEffect : se lance lorque le composant charge pour la première fois, puis lorsque l'une des dépendances est modifiées


  function handleChange(e){
    let val = e.target.value;
    let filtre = dataState.dataFiltre;
    if(dataState.data){
      filtre = dataState.data;
      if (val && val.trim() !== ''){
        filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      }
    }
    if(spec){
      filtre = filtre.filter(term => term.professional_domain_id[0].domain_name === spec); 
    }
    if(city){
      filtre = filtre.filter(term => term.professionnal_city === city); 
    }
    setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre});
    setSearchState(val);  
  }

  function handleClickSpec(val){
    setSpec(val);
    if(dataState.data){
      let filtre = dataState.data;
      filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(searchState.toLowerCase()) > -1 );
      if(city){
        filtre = filtre.filter(term => term.professionnal_city === city); 
      }
      filtre = filtre.filter(term => term.professional_domain_id[0].domain_name === val); 
      setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre});
    }
  }

  function handleDeleteSpec(){
    setSpec("");
    if(dataState.data){
      let filtre = dataState.data;
      filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(searchState.toLowerCase()) > -1 );
      if(city){
        filtre = filtre.filter(term => term.professionnal_city === city); 
      }
      setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre});
    }
  }

  function handleClickCity(val){
    setCity(val);
    if(dataState.data){
      let filtre = dataState.data;
      filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(searchState.toLowerCase()) > -1 );
      if(spec){
        filtre = filtre.filter(term => term.professional_domain_id[0].domain_name === spec);  
      }
      filtre = filtre.filter(term => term.professionnal_city === val); 
      setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre});
    }
  }

  function handleDeleteCity(){
    setCity("");
    if(dataState.data){
      let filtre = dataState.data;
      filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(searchState.toLowerCase()) > -1 );
      if(spec){
        filtre = filtre.filter(term => term.professional_domain_id[0].domain_name === spec);  
      }
      setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre});
    }
  }

  function stringToSlug(Text)
  {
      return Text
          .toLowerCase()
          .replaceAll(/ /g,'-')
          ;
  }

  function handleClickMedecin(medecin,ville){
    history.push('/medecin/' + stringToSlug(medecin) + '/' + stringToSlug(ville) );
  }



  return (
    <div className="background-white height-full-adapt">
      <div className="content">
        <div className='block-recherche flex'>
            <SearchPageRecherche placeHolder="Médecin" spec={spec} handleClickSpec={handleClickSpec} handleClickCity={handleClickCity} searchText={searchState} handleChange={handleChange}></SearchPageRecherche>
        </div>
        <Filtres spec={spec} city={city} handleDeleteSpec={handleDeleteSpec} handleDeleteCity={handleDeleteCity}></Filtres>
        <ListPageRecherche data={dataState.dataFiltre} isLoading={dataState.loading} handleClickMedecin={handleClickMedecin} ></ListPageRecherche>
      </div>      
    </div>      
  );

}
  
export default Recherche;