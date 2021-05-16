import AppointmentDoctor from "./AppointmentDoctor";
import InfosProfilDoctor from "./InfosProfilDoctor";


function DoctorProfil({data}) {
    return (
        <div className="block-profil flex-no-align-between">
            <div className="block-profil-left">
                <InfosProfilDoctor data={data}/>
            </div>
            <div className="block-profil-right">
                <AppointmentDoctor/>
            </div>
        </div>
    );
}

export default DoctorProfil;