import { useEffect, useState } from "react";
import AppointmentPatient from "./AppointmentPatient";
import InfosProfilPatient from "./InfosProfilPatient";
import {http} from '../axios-create.js';


function PatientProfil({data}) {

    const [erreurAppoint, setErreurAppoint] = useState("");

    const [appointments, setAppointments] = useState({
        loading: false,
        data: null
    });

    useEffect( () => {
        setAppointments({ loading: true});
        http.get('appointments/' + localStorage.getItem('category') + 's/' + localStorage.getItem('access_id'))
        .then((response) => {
            if(response){
                if(erreurAppoint){
                    setErreurAppoint("");
                }
                setAppointments({ loading: false, data: response.data });
            }
        })
        .catch((error) => {
            setAppointments({ loading: false, data: null});
            if(error.response){
                if(error.response.status !== 500){
                    if(error.response.data.violations){
                        setErreurAppoint(error.response.data.violations[0].title);
                    }
                    if(error.response.data.message){
                        setErreurAppoint(error.response.data.message);
                    }  
                }else{
                    setErreurAppoint("Erreur interne au serveur");
                }
            }else{
                setErreurAppoint("Erreur interne au serveur");
            } 
        })
    },[setAppointments, setErreurAppoint, erreurAppoint]);

    function deleteAppointment(id){
        http.post('appointments/status/' + id, {"status" : 2})
            .then((response) => {
                if(response.status === 200){
                    console.log(response);
                    http.get('appointments/' + localStorage.getItem('category') + 's/' + localStorage.getItem('access_id'))
                    .then((response) => {
                        if(response){
                            if(erreurAppoint){
                                setErreurAppoint("");
                            }
                            setAppointments({ loading: false, data: response.data });
                        }
                    })
                    .catch((error) => {
                        setAppointments({ loading: false, data: null});
                        if(error.response){
                            if(error.response.status !== 500){
                                if(error.response.data.violations){
                                    setErreurAppoint(error.response.data.violations[0].title);
                                }
                                if(error.response.data.message){
                                    setErreurAppoint(error.response.data.message);
                                }  
                            }else{
                                setErreurAppoint("Erreur interne au serveur");
                            }
                        }else{
                            setErreurAppoint("Erreur interne au serveur");
                        } 
                    })
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="block-profil flex-no-align-between">
            <div className="block-profil-left">
                <InfosProfilPatient data={data}/>
            </div>
            <div className="block-profil-right">
                <AppointmentPatient appointments={appointments} deleteAppointment={deleteAppointment} erreurAppoint={erreurAppoint}  />
            </div>
        </div>
    );
}

export default PatientProfil;