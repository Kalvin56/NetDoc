import {useParams} from 'react-router-dom';

function Recherche() {

  // let location = useLocation();
  // let chaine = "";
  // if(location.state){
  //   chaine = location.state.chaine;
  // }

  let {name} = useParams();

  return (
    <div className="background-white height-full-adapt">
      <div className="content">
        <h1>Recherche</h1>
        <p>Recherche pour : {name}</p>
      </div>      
    </div>      
  );

}
  
export default Recherche;