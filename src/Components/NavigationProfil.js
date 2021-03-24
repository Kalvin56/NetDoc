import { NavLink } from "react-router-dom";



function NavigationProfil() {

    let isLoggedIn = false;

    if(isLoggedIn){

        return (
            <NavLink to="/Profil" className="nav" exact activeClassName="current">
                Profil
            </NavLink>
        );

    }else{

        return (
            <NavLink to="/login" className="login" exact activeClassName="current">
                Connexion
            </NavLink>
        );
    }

    
  }
    
export default NavigationProfil;