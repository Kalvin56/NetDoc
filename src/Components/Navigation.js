import { NavLink } from "react-router-dom";
import NavigationProfil from "./NavigationProfil";
import {useLocation} from 'react-router-dom';
import "./Navigation.scss";
import {useState, useEffect} from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom'
import { useRef } from "react";


function Navigation() {

  const menuRef = useRef(null);
  const history = useHistory();

  // Gérer le bon affichage des éléments lors du passage à une autre page
   useEffect(() => {
      return history.listen(() => {
        let changeClass = menuRef.current;
        setOpacity(0);
        changeClass.classList.add('close');
      }) 
   }) 

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


  // Gérer l'opacité et les différentes classe du menu selon l'activation ou non du menu
  function change(){
    // const style = getComputedStyle(refContainer.current)
    // console.log(style.opacity);
    let changeClass = menuRef.current;
    // console.log('start : ' + changeClass.classList.value);
    if(opacity === 0){
      setOpacity(1);
      if(changeClass.classList.value === "menuIconBlock"){
        changeClass.classList.add('open');
      }else{
        changeClass.classList.remove('close');
      }      
    }else{
      setOpacity(0);
      changeClass.classList.add('close');
    }
    // console.log('end : ' + changeClass.classList.value);
    
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
            Trouver un médecin
          </NavLink>
          <NavLink to="/Infos" className="nav" exact activeClassName="current">
            Qui sommes-nous ?
          </NavLink>
          <NavigationProfil/>
        </div>
        <div className="menu-small">
          <div onClick={change} ref={menuRef} className="menuIconBlock">
            <div  className="menuIcon"></div>
          </div>
          <div /*ref={refContainer}*/ style={stl} className="menu-small-contain flex-center">
            <NavLink to="/Recherche" style={stl3} className="nav" exact activeClassName="current-small">
              Trouver un médecin
            </NavLink>
            <NavLink to="/Infos" className="nav" exact activeClassName="current-small">
              Qui sommes-nous ?
            </NavLink>
            <NavigationProfil/>
          </div>
        </div>
      </div>          
    </div>
  );

}

    
export default Navigation;