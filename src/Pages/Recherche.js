import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchPageRecherche from '../Components/SearchPageRecherche';

function Recherche() {

  // let location = useLocation();
  // let chaine = "";
  // if(location.state){
  //   chaine = location.state.chaine;
  // 
  
  var text = useParams().text;

  function SlugToString(Text)
  {
      return Text
          .replace('-',' ')
          ;
  }

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  if(text){
      text = capitalizeTheFirstLetterOfEachWord(SlugToString(text));
  }

  const [spec, setSpec] = useState("");

  const [dataState, setDataState] = useState({
    loading: false,
    data: null,
    dataFiltre : null,
  });

  const[searchState, setSearchState] = useState("");


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
    let val = e.target.value;
    let filtre = dataState.dataFiltre;
    if(dataState.data){
      filtre = dataState.data;
      if (val && val.trim() !== ''){
        filtre = filtre.filter(term => term.professional_complete_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      }
      filtre = filtre.slice(0,5);
    }
    setDataState({loading : dataState.loading, data: dataState.data, dataFiltre : filtre})
    setSearchState(val);  
  }

  function handleClick(val){
    setSpec(val);
  }



  return (
    <div className="background-white height-full-adapt">
      <div className="content">
        <div className='block-recherche flex'>
            <SearchPageRecherche placeHolder="Médecin" spec={spec} handleClick={handleClick} searchText={searchState} handleChange={handleChange}></SearchPageRecherche>
        </div>
        <div>
          spec : {spec}
        </div>
      </div>      
    </div>      
  );

}
  
export default Recherche;