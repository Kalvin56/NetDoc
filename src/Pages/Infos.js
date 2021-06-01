import medicale from '../Assets/medicale.jpg';

function Infos() {
  return (
    <div className="background-white height-full-adapt">
      <div>
        <div style={{backgroundImage : `url(${medicale})`, height: '55vh', backgroundSize : 'cover', width:'100%'}}>
        </div>
      </div>
    </div>
  );
}
  
export default Infos;