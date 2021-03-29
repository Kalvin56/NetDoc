import { NavLink } from "react-router-dom";



function NavigationProfil({style}) {

    let isLoggedIn = false;

    if(isLoggedIn){

        return (
            <NavLink to="/Profil" className="nav" exact activeClassName="current">
                <span style={style} className='nav-txt-small'>Profil</span>
            </NavLink>
        );

    }else{

        return (
            <NavLink to="/login" className="login" exact activeClassName="current">
                <span style={style} className='nav-txt-small'>Connexion</span>
            </NavLink>
        );
    }

    
  }
    
export default NavigationProfil;