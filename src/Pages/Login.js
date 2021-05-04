import Dialog from '@material-ui/core/Dialog';
import { useEffect, useState } from 'react';
import DialogLogin from '../Components/DialogLogin';
import DialogRegister from '../Components/DialogRegister';
import {http} from '../axios-create.js';

function Login({open, handleCloseLog}) {

    const[widthSize, setWidthSize] = useState(window.innerWidth);

    useEffect( () =>{
        function handleResize(){
            setWidthSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });
            

    const[login, setLogin] = useState({
        email : "",
        password : ""
    });

    const[patient, setPatient] = useState(true);

    const[register, setRegister] = useState({
        name : "",
        lastname : "",
        password : "",
        confirm_password : "",
        email : "", 
        birth : new Date(),
        phone : "",
        place : "",
        city : "",
        domain : []
    });

    const[registerPage, setRegisterPage] = useState(false);

    const[loadingRegister, setLoadingRegister] = useState(false);
    const[erreurRegister, setErreurRegister] = useState("");
    const[successRegister, setSuccessRegister] = useState(false);

    const [dataDomainsState, setDataDomainsState] = useState({
        loading: false,
        data: null
    });


    useEffect(() => {
        setDataDomainsState({ loading: true});
        http.get('domains')
        .then((response) => {
            setDataDomainsState({ loading: false, data: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }, [setDataDomainsState]);

    function handleRegisterPage(e){
        e.preventDefault();
        if(!registerPage){
            setRegisterPage(true);
        }else{
            setRegisterPage(false);
        }
    }
        

    function handleLoginChange(e,champ){
        let val = e.target.value;
        switch(champ){
            case 'email' :
                setLogin({...login, email: val});
                break;
            case 'password' :
                setLogin({...login, password : val});
                break;
            default :
                console.log("champ non valide");
                break;
        }
    }

    function handleRegisterChange(e,champ){
        switch(champ){
            case 'name' :
                setRegister({...register, name : e.target.value});
                break;
            case 'lastname' :
                setRegister({...register, lastname : e.target.value});
                break;
            case 'password' :
                setRegister({...register, password : e.target.value});
                break;
            case 'confirm_password' :
                setRegister({...register, confirm_password : e.target.value});
                break;
            case 'email' :
                setRegister({...register, email: e.target.value});
                break;            
            case 'birth':
                setRegister({...register, birth: new Date(e)});
                break;
            case 'phone':
                setRegister({...register, phone: e.target.value});
                break;
            case 'place':
                setRegister({...register, place: e.target.value});
                break;
            case 'city':
                setRegister({...register, city: e.target.value});
                break;
            case 'domain':
                console.log(e.target.value);
                setRegister({...register, domain: e.target.value});
                break;
            default :
                console.log("champ non valide");
                break;
        }
    }

    function handleLogin(e){
        e.preventDefault();//empeche le formulaire de rafraichir la page
        console.log('login!');
    }

    function handleRegister(e){
        e.preventDefault();
        if(patient){
            setLoadingRegister(true);
            const data = {
                "patient_name" : register.name,
                "patient_lastname" : register.lastname,
                "patient_birth" : register.birth,
                "patient_phone" : register.phone,
                "email" : register.email,
                "password" : register.password,
                "patient_confirm_password" : register.confirm_password
            }
            http.post('register/patient', data)
            .then((response) => {
                setLoadingRegister(false);
                console.log(response);
                if(response.status === 201){
                    if(erreurRegister){
                        setErreurRegister("");
                    }
                    setSuccessRegister(true);
                }
            }).catch((error) => {
                setLoadingRegister(false);
                if(successRegister){
                    setSuccessRegister(false);
                }
                if(error.response){
                    if(error.response.status !== 500){
                        if(error.response.data.violations){
                            setErreurRegister(error.response.data.violations[0].title);
                        }
                        if(error.response.data.message){
                            setErreurRegister(error.response.data.message);
                        }  
                    }else{
                        setErreurRegister("Erreur interne au serveur");
                    }
                }else{
                    setErreurRegister("Erreur interne au serveur");
                }          
            })
        }else{
            setLoadingRegister(true);
            const data = {
                "doctor_name" : register.name,
                "doctor_lastname" : register.lastname,
                "doctor_birth" : register.birth,
                "doctor_phone" : register.phone,
                "email" : register.email,
                "password" : register.password,
                "doctor_place" : register.place,
                "doctor_city" : register.city,
                "doctor_domain" : register.domain,
                "doctor_confirm_password" : register.confirm_password
            }
            http.post('register/doctor', data)
            .then((response) => {
                setLoadingRegister(false);
                console.log(response);
                if(response.status === 201){
                    if(erreurRegister){
                        setErreurRegister("");
                    }
                    setSuccessRegister(true);
                }
            }).catch((error) => {
                setLoadingRegister(false);
                if(successRegister){
                    setSuccessRegister(false);
                }
                if(error.response){
                    if(error.response.status !== 500){
                        if(error.response.data.violations){
                            setErreurRegister(error.response.data.violations[0].title);
                        }
                        if(error.response.data.message){
                            setErreurRegister(error.response.data.message);
                        }  
                    }else{
                        setErreurRegister("Erreur interne au serveur");
                    }
                }else{
                    setErreurRegister("Erreur interne au serveur");
                }           
            })
        }
    }

    function handlePatient(){
        if(!loadingRegister){
            if(patient){
                setPatient(false);
            }else{
                setPatient(true);
            }if(erreurRegister){
                setErreurRegister("");
            }
        }        
    }


    return (
        <Dialog fullScreen={ widthSize > 1060 ? false : true} open={open} fullWidth>
            {registerPage ? <DialogRegister domains={dataDomainsState.data} loading={loadingRegister} success={successRegister} erreur={erreurRegister} patient={patient} handlePatient={handlePatient} handleCloseLog={handleCloseLog} register={register} handleRegisterPage={handleRegisterPage} handleRegisterChange={handleRegisterChange} handleRegister={handleRegister}></DialogRegister> : <DialogLogin patient={patient} handlePatient={handlePatient} handleCloseLog={handleCloseLog} handleRegisterPage={handleRegisterPage} handleLoginChange={handleLoginChange} handleLogin={handleLogin} login={login} ></DialogLogin>}
        </Dialog>
    );

}

export default Login;