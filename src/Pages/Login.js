import Dialog from '@material-ui/core/Dialog';
import { useState } from 'react';
import DialogLogin from '../Components/DialogLogin';
import DialogRegister from '../Components/DialogRegister';
import {http} from '../axios-create.js';

function Login({open, handleCloseLog}) {

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
    });

    const[registerPage, setRegisterPage] = useState(false);

    const[loadingRegister, setLoadingRegister] = useState(false);
    const[erreurRegister, setErreurRegister] = useState("");
    const[successRegister, setSuccessRegister] = useState(false);

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
        setLoadingRegister(true);
        const data = {
            "user_name" : register.name,
            "user_lastname" : register.lastname,
            "user_birth" : register.birth,
            "user_phone" : register.phone,
            "user_mail" : register.email,
            "user_password" : register.password
        }
        http.post('users', data)
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
            if(successRegister){
                setSuccessRegister(false);
            }
            setLoadingRegister(false);
            if(error.response.data.violations){
                setErreurRegister(error.response.data.violations[0].title);
            }
            if(error.response.data.message){
                setErreurRegister(error.response.data.violations[0].title);
            }            
        })
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
        <Dialog open={open} fullWidth>
            {registerPage ? <DialogRegister loading={loadingRegister} success={successRegister} erreur={erreurRegister} patient={patient} handlePatient={handlePatient} handleCloseLog={handleCloseLog} register={register} handleRegisterPage={handleRegisterPage} handleRegisterChange={handleRegisterChange} handleRegister={handleRegister}></DialogRegister> : <DialogLogin patient={patient} handlePatient={handlePatient} handleCloseLog={handleCloseLog} handleRegisterPage={handleRegisterPage} handleLoginChange={handleLoginChange} handleLogin={handleLogin} login={login} ></DialogLogin>}
        </Dialog>
    );

}

export default Login;