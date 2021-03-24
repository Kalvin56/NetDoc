import {useParams} from 'react-router-dom';

function Medecin() {

  let {slug} = useParams();

  return (
    <div>
      <h1>Medecin</h1>
      <p>Le médecin est : {slug}</p>
    </div>      
    );
  }

export default Medecin;