import InfosProfilPatient from "./InfosProfilPatient";

function PatientProfil({data}) {
    return (
        <div className="block-profil flex-between">
            <div className="block-profil-left">
                <InfosProfilPatient data={data}/>
            </div>
            <div className="block-profil-right">
                
            </div>
        </div>
    );
}

export default PatientProfil;