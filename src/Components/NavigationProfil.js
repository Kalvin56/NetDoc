import { NavLink } from "react-router-dom";

function NavigationProfil({style, handleClickOpenLog}) {

    let isLoggedIn = false;

    if(isLoggedIn){

        return (
            <NavLink to="/profil" className="nav" exact activeClassName="current">
                <span style={style} className='nav-txt-small'>Profil</span>
            </NavLink>
        );

    }else{

        return (
            <button onClick={handleClickOpenLog} className="login">
                <span style={style} className='nav-txt-small'>Connexion</span>
            </button>
        );
    }

    
  }
    
export default NavigationProfil;