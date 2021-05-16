import profil_img from '../Assets/user.png';
import { IoLogOutOutline } from "react-icons/io5";
import { authenticationService } from '../Auth/authentification.service';

function InfosProfilDoctor({data}) {
    return (
        <div className="profil-infos-block">
            <div className="profil-infos-block-top flex">
                <div className="border-blue">
                    <div className="border-white">
                        <div className="imgBox">
                            <img className="imgSet" src={profil_img} alt="profil"/>
                        </div>
                    </div>
                </div>
                <div className="profil-infos-name-deco flex-between">
                    <div className='profil-infos-name'>
                        {data.doctor_complete_name}
                    </div>
                    <div>
                        <button><IoLogOutOutline onClick={authenticationService.logout} className="icn-logout"></IoLogOutOutline></button>
                    </div>
                </div>
            </div>
            <div className="profil-infos-block-content">
                <ul>
                    <li>Prénom / Nom : {data.doctor_complete_name}</li>
                    <li>Date de naissance : {data.doctor_birth.split('T')[0]}</li>
                    <li>Email : {data.user.email}</li>
                    <li>Téléphone : {data.doctor_phone}</li>
                    <li>Adresse : {data.doctor_place}</li>
                    <li>Ville : {data.doctor_city}</li>
                    <li>Spécialité(s) : {data.doctor_domain_id.map((dom, index) => ((index > 0 ? ' / ' : ' ')  + dom.domain_name ))}</li>
                </ul>
            </div>
        </div>
    );
}

export default InfosProfilDoctor;