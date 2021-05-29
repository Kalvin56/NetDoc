import { useEffect, useState } from "react";
import AppointmentDoctor from "./AppointmentDoctor";
import InfosProfilDoctor from "./InfosProfilDoctor";
import {http} from '../axios-create.js';


function DoctorProfil({data}) {

    const [openDialogAvail, setOpenDialogAvail] = useState(false);
    const [availabilitie, setAvailabilitie] = useState({ 
        date : new Date(),
        duration : 60
    });

    const [loadingAvail, setLoadingAvail] = useState(false);
    const [erreurAvail, setErreurAvail] = useState("");
    const [successAvail, setSuccessAvail] = useState(false);

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


    function handleClickOpenAvail(){
        setOpenDialogAvail(true);
    }
    
    
    function handleCloseAvail(){
        setOpenDialogAvail(false);
    }


    function newAvailabilitie(e){
        e.preventDefault();//empeche le formulaire de rafraichir la page
        setLoadingAvail(true);
        console.log(availabilitie.date);
        const data = {
            "appointment_date" : availabilitie.date,
            "appointment_duration" : availabilitie.duration
        }
        http.post('appointments/create', data)
        .then((response) => {
            setLoadingAvail(false);
            console.log(response);
            if(response.status === 201){
                if(erreurAvail){
                    setErreurAvail("");
                }
                setSuccessAvail(true);
                handleCloseAvail();
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
            setLoadingAvail(false);
            if(successAvail){
                setSuccessAvail(false);
            }
            if(error.response){
                if(error.response.status !== 500){
                    if(error.response.data.violations){
                        setErreurAvail(error.response.data.violations[0].title);
                    }
                    if(error.response.data.message){
                        setErreurAvail(error.response.data.message);
                    }  
                }else{
                    setErreurAvail("Erreur interne au serveur");
                }
            }else{
                setErreurAvail("Erreur interne au serveur");
            }          
        })
    }

    function handleAvailabilitieChange(e,champ){
        switch(champ){
            case 'duration' :
                setAvailabilitie({...availabilitie, duration: parseInt(e.target.value,10)});
                break;
            case 'date':
                // console.log(new Date(e).toISOString());
                setAvailabilitie({...availabilitie, date: new Date(e).toISOString()});
                break;
            default :
                console.log("champ non valide");
                break;
        }
    }

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
                <InfosProfilDoctor data={data}/>
            </div>
            <div className="block-profil-right">
                <AppointmentDoctor newAvailabilitie={newAvailabilitie} handleClickOpenAvail={handleClickOpenAvail} handleCloseAvail={handleCloseAvail} openDialogAvail={openDialogAvail} availabilitie={availabilitie} handleAvailabilitieChange={handleAvailabilitieChange} loading={loadingAvail} success={successAvail} erreur={erreurAvail} appointments={appointments} deleteAppointment={deleteAppointment} erreurAppoint={erreurAppoint}  />
            </div>
        </div>
    );
}

export default DoctorProfil;