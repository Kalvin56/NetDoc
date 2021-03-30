import medical from "../Assets/medical.json";
import Lottie from 'react-lottie-player'
import { useState } from "react";
import { useHistory } from "react-router";
import Search from "../Components/Search";

function Accueil() {

  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  function handleChange(e){
    setSearchText(e.target.value);
  }

  function goPageSearch(e){
    e.preventDefault();// supprime le message : Form submission canceled because the form is not connected react
    history.push('/Recherche/' + searchText);
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
                  <Search placeHolder="Nom du médecin" searchText={searchText} handleChange={handleChange}></Search>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
    
export default Accueil;