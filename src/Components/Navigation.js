import { NavLink } from "react-router-dom";
import NavigationProfil from "./NavigationProfil";
import {useLocation} from 'react-router-dom';
import "./Navigation.css";
import {useState, useEffect} from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom'


function Navigation() {

  const history = useHistory();

   useEffect(() => {
      return history.listen(() => { 
         setOpacity(0);
      }) 
   }) 

  let page = useLocation().pathname;
  var pageBool = false;
  const [opacity, setOpacity] = useState(0);

  if(page === "/"){
    pageBool = true;
  }

  const stl = {
    opacity: opacity,
    visibility : opacity ? 'visible' : 'hidden'
  }

  const stl2 = {
    visibility : pageBool ? 'hidden' : 'visible',
  }

  function change(){
    // const style = getComputedStyle(refContainer.current)
    // console.log(style.opacity);
    if(opacity === 0){
      setOpacity(1);
    }else{
      setOpacity(0);
    }
    
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
            <div className="menuIconBlock">
              <span onClick={change} className="menuIcon">X</span>
            </div>
            <div /*ref={refContainer}*/ style={stl} className="menu-small-contain flex-center">
              <NavLink to="/Recherche" style={stl2} className="nav" exact activeClassName="current-small">
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