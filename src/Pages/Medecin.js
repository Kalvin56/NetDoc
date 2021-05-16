import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {http} from '../axios-create.js';
import MedecinAffichage from '../Components/MedecinAffichage.js';
import Erreur from './404.js';


function Medecin() {

  const [erreur, setErreur] = useState(false);
  const [dataState, setDataState] = useState({
    loading: false,
    data: null
  });

  var slug = useParams().slug;
  var ville = useParams().ville;

  function SlugToString(Text)
  {
      return Text
          .replaceAll('-',' ');
  }

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  if(slug){
    slug = capitalizeTheFirstLetterOfEachWord(SlugToString(slug));
  }

  if(ville){
    ville = capitalizeTheFirstLetterOfEachWord(SlugToString(ville));
  }

  

  useEffect( () => {
    const data = {
      "doctor_complete_name" : slug,
      "doctor_city" : ville
    }
    setDataState({ loading: true});
    http.post('search/doctors', data)
    .then((response) => {
      // handle success
      setDataState({ loading: false, data: response.data });
    })
    .catch((error) => {
      // handle error
      console.log(error);
      setErreur(true);
    })
  },[setDataState, slug, ville]);

  if(!erreur){
    return (
      <div className="background-white height-full-adapt">
        <div className="content">
        <MedecinAffichage data={dataState.data} isLoading={dataState.loading}></MedecinAffichage>
        </div>
      </div>      
      );
  }else{
    return(
      <Erreur></Erreur>
    )
  }

}

  

export default Medecin;