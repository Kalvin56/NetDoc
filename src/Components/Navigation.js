import { NavLink } from "react-router-dom";
import NavigationProfil from "./NavigationProfil";
import {useLocation} from 'react-router-dom';
import "./Navigation.scss";
import {useState, useEffect} from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom'
import { useRef } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

function Navigation() {

  const menuRef = useRef(null);
  const history = useHistory();
  // menuRef.current.setAttribute("disabled", "disabled");


  // Gérer le bon affichage des éléments lors du passage à une autre page
   useEffect(() => {
      return history.listen(() => {
        // let changeClass = menuRef.current;
        change();
        // changeClass.classList.add('close');
      }) 
   }) 

  let page = useLocation().pathname;
  var pageBool = false;
  const [opacity, setOpacity] = useState(0);


  const [disabled, setDisabled] = useState(false);
  
  

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
  // console.log(menuRef.current);
  var tl = gsap.timeline();

  // function timelineEnd(){
  //   if(menuRef.current){
  //     console.log('end');
  //     console.log(menuRef.current);
  //     // menuRef.current.setAttribute('disabled','none')
  //   }
  // }

  
  
  function change(){

      // setDisabled(true);
      

      // if(menuRef.current){
      //   menuRef.current.setAttribute('disabled','disabled');
      // }
      if(opacity === 0){
        setOpacity(1);
        tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.4, cssRule: {translateY : '-1px'}},'start');
        tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.6, cssRule: {rotate : '45deg'}},'end');
        tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.4, cssRule: {translateY : '-1px'}},'start');
        tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.6, cssRule: {rotate : '-45deg'}},'end');
        tl.to(CSSRulePlugin.getRule('.menuIcon'), {duration: 0.1, cssRule: {background : 'transparent'}}, 'start');
        
      }else{
        setOpacity(0);
        tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.4, cssRule: {translateY : '-10px', rotate : '0deg'}},'same');
        tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.4, cssRule: {translateY : '10px', rotate : '0deg'}},'same');
        tl.to(CSSRulePlugin.getRule('.menuIcon'), {duration: 0.1, cssRule: {background : 'white'}}, 'same');
      }
      // setDisabled(false);

    
    
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
          <div ref={menuRef} onClick={change}  className="menuIconBlock">
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