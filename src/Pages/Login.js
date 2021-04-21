import Dialog from '@material-ui/core/Dialog';
import { useState } from 'react';
import DialogLogin from '../Components/DialogLogin';
import DialogRegister from '../Components/DialogRegister';

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
        confirm_passwor : "",
        email : "", 
        birth : new Date(),
        phone : "",
    });

    const[registerPage, setRegisterPage] = useState(false);

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
            case 'birth':
                setRegister({...register, birth : new Date(e)});
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
        console.log('register!');
    }

    function handlePatient(){
        if(patient){
            setPatient(false);
        }else{
            setPatient(true);
        }
    }


    return (
        <Dialog open={open} fullWidth>
            {registerPage ? <DialogRegister patient={patient} handlePatient={handlePatient} handleCloseLog={handleCloseLog} register={register} handleRegisterPage={handleRegisterPage} handleRegisterChange={handleRegisterChange} handleRegister={handleRegister}></DialogRegister> : <DialogLogin patient={patient} handlePatient={handlePatient} handleCloseLog={handleCloseLog} handleRegisterPage={handleRegisterPage} handleLoginChange={handleLoginChange} handleLogin={handleLogin} login={login} ></DialogLogin>}
        </Dialog>
    );

}

export default Login;