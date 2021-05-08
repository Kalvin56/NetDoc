import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {authenticationService} from '../Auth/authentification.service';
import { FaUserMd, FaUser } from "react-icons/fa";



function NavigationProfil({style, handleClickOpenLog, isLoggedIn, completeName, category, big}) {

    // useEffect(() => {
    //     setIsLoggedIn(authenticationService.isLoggedIn);
    //     if(isLoggedIn){
    //         setCompleteName(authenticationService.getCompleteName);
    //     }
    // }, [setIsLoggedIn, setCompleteName, isLoggedIn]);

    if(isLoggedIn){

        if(!big){

            return (
                <NavLink to="/profil" className="nav" exact activeClassName="current-small">
                    <span className="logo-profil">{category==="doctor" ? <FaUserMd></FaUserMd> : <FaUser></FaUser>}</span><span style={style} className='nav-txt-small'>{completeName}</span>
                </NavLink>
            );

        }else{
            return (
                <NavLink to="/profil" className="nav flex-center" exact activeClassName="current">
                    <span className="logo-profil">{category==="doctor" ? <FaUserMd></FaUserMd> : <FaUser></FaUser>}</span> <span>{completeName}</span>
                </NavLink>
            );
        }

    }else{

        return (
            <button onClick={handleClickOpenLog} className="login">
                <span style={style} className='nav-txt-small'>Connexion</span>
            </button>
        );
    }

    
  }
    
export default NavigationProfil;