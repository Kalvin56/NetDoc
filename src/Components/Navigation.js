import { NavLink } from "react-router-dom";
import {authenticationService} from '../Auth/authentification.service';
import NavigationProfil from "./NavigationProfil";
import {useLocation} from 'react-router-dom';
import "./CSS/Navigation.scss";
import {useState} from 'react';
import React from 'react';
import Menu from "./Menu";
import Login from "../Pages/Login";
import { gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

function Navigation() {

  let page = useLocation().pathname;
  var pageBool = false;
  const [opacity, setOpacity] = useState(0);

  const [openLog, setOpenLog] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(authenticationService.isLoggedIn);
  const [completeName, setCompleteName] = useState(isLoggedIn ? authenticationService.getCompleteName : "");
  const [category, setCategory] = useState(isLoggedIn ? authenticationService.getCategory : "");

  var tl = gsap.timeline();

  function handleClickOpenLog(){
    if(opacity){
      setOpacity(0);
      tl.to(CSSRulePlugin.getRule('html'), {duration: 0, cssRule: {overflow:'inherit'}}, 'same');
      tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.7, cssRule: {translateY : '-9px', rotate : '0deg'}},'same');
      tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.7, cssRule: {translateY : '9px', rotate : '0deg'}},'same');
      tl.to(CSSRulePlugin.getRule('.menuIcon'), {duration: 0.5, cssRule: {background : 'white'}}, 'same');
    }
    setOpenLog(true);
  }

  function handleCloseLog(){
      setOpenLog(false);
      setIsLoggedIn(authenticationService.isLoggedIn);
      setCompleteName(authenticationService.getCompleteName);
      setCategory(authenticationService.getCategory);
  }

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
        <div className="menu-big flex">
          <NavLink to="/recherche" style={stl2} className="nav" activeClassName="current">
            <span>Trouver un médecin</span>
          </NavLink>
          <NavLink to="/infos" className="nav" exact activeClassName="current">
            <span>Qui sommes-nous ?</span>
          </NavLink>
          <NavigationProfil handleClickOpenLog={handleClickOpenLog} isLoggedIn={isLoggedIn} completeName={completeName} category={category} big={true}/>
        </div>
        <div className="menu-small flex">
          <Menu opacity={opacity} setOpacity={setOpacity}/>
          <div style={stl} className="menu-small-contain flex-center">
            <NavLink to="/recherche" style={stl3} className="nav" exact activeClassName="current-small">
              <span style={stl} className='nav-txt-small'>Trouver un médecin</span>
            </NavLink>
            <NavLink to="/infos" className="nav" exact activeClassName="current-small">
              <span style={stl} className='nav-txt-small'>Qui sommes-nous ?</span>
            </NavLink>
            <NavigationProfil style={stl} handleClickOpenLog={handleClickOpenLog} isLoggedIn={isLoggedIn} completeName={completeName} category={category} big={false}/>
          </div>
        </div>
      </div>
      <Login open={openLog} handleCloseLog={handleCloseLog}></Login>        
    </div>
  );

}

    
export default Navigation;