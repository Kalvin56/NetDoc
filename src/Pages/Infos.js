import medicale from '../Assets/medicale.jpg';
import { FaLaptopMedical, FaBriefcaseMedical, FaClinicMedical, FaUserAlt } from "react-icons/fa";

function Infos() {
  return (
    <div className="background-white height-full-adapt">
      <div>
        <div style={{backgroundImage : `url(${medicale})`, height: 'clamp(210px,24vw,410px)', backgroundSize : 'cover', width:'100%'}}>
          <div className="infos-top-right">
            <h1>Prenez ou gérez vos rendez-vous en toute simplicité avec NetDoc</h1>
            <br />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia tempora maxime obcaecati aut repellat! Veniam, repellendus provident culpa numquam fugiat reprehenderit, ea praesentium eveniet illo voluptate, rerum doloribus modi?</h3>
          </div>
        </div>
        <br />
        <br />
        <div className="stats-elem flex">
          <div className="flex-center stats-elem-block">
            <FaLaptopMedical className="infos-logo" />
            + de 15 000 RDV pris
          </div>
          <div className="flex-center stats-elem-block">
            <FaBriefcaseMedical className="infos-logo" />
            + de 60 spécialités
          </div>
        </div>
        <div className="stats-elem flex">
          <div className="flex-center stats-elem-block">
            <FaClinicMedical className="infos-logo" />
            + de 500 villes représentées
          </div>
          <div className="flex-center stats-elem-block">
            <FaUserAlt className="infos-logo" />
            + de 2000 utlisateurs
          </div>
        </div> 
        <br />
        <br />
        <div className="content contact-block">
          <p className="text-contact">Nous contacter :</p>
          <p className="text-contact-infos">06 00 00 00 00 / contact@netdoc.fake</p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
  
export default Infos;