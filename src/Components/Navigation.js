import { NavLink } from "react-router-dom";
import NavigationProfil from "./NavigationProfil";
import {useLocation} from 'react-router-dom';
import "./CSS/Navigation.scss";
import {useState} from 'react';
import React from 'react';
import Menu from "./Menu";

function Navigation() {

  let page = useLocation().pathname;
  var pageBool = false;
  const [opacity, setOpacity] = useState(0);  

  if(page === "/"){
    pageBool = true;
  }

  // Gérer la visibilité du menu selon l'activation ou non du menu
  const stl = {
    opacity: opacity,
    visibility : opacity ? 'visible' : 'hidden'
  }

  // Gérer la visibilité des éléments selon la page
  const stl2 = {
    visibility : pageBool ? 'hidden' : 'visible',
  }

  // Centrer les éléments de navigation du menu
  const stl3 = {
    display : pageBool ? 'none' : 'flex',
  }

  return (
    <div className="navigation flex">
      <div className="content flex-between">
        <div style={stl2}>
          <NavLink to="/" className="title">
            NetDoc
          </NavLink> 
        </div>
        <div className="menu-big">
          <NavLink to="/Recherche" style={stl2} className="nav" exact activeClassName="current">
            <span>Trouver un médecin</span>
          </NavLink>
          <NavLink to="/Infos" className="nav" exact activeClassName="current">
            <span>Qui sommes-nous ?</span>
          </NavLink>
          <NavigationProfil/>
        </div>
        <div className="menu-small">
          <Menu opacity={opacity} setOpacity={setOpacity}/>
          <div style={stl} className="menu-small-contain flex-center">
            <NavLink to="/Recherche" style={stl3} className="nav" exact activeClassName="current-small">
              <span style={stl} className='nav-txt-small'>Trouver un médecin</span>
            </NavLink>
            <NavLink to="/Infos" className="nav" exact activeClassName="current-small">
              <span style={stl} className='nav-txt-small'>Qui sommes-nous ?</span>
            </NavLink>
            <NavigationProfil style={stl}/>
          </div>
        </div>
      </div>          
    </div>
  );

}

    
export default Navigation;