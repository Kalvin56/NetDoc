import {useLocation} from 'react-router-dom';

function Recherche() {

  let location = useLocation();
  let chaine = "";
  if(location.state){
    chaine = location.state.chaine;
  }

  return (
    <div>
      <h1>Recherche</h1>
      <p>Recherche pour : {chaine}</p>
    </div>      
  );

}
  
export default Recherche;