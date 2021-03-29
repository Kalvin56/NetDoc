import {useParams} from 'react-router-dom';

function Recherche() {

  // let location = useLocation();
  // let chaine = "";
  // if(location.state){
  //   chaine = location.state.chaine;
  // }

  let {name} = useParams();

  return (
    <div>
      <h1>Recherche</h1>
      <p>Recherche pour : {name}</p>
    </div>      
  );

}
  
export default Recherche;