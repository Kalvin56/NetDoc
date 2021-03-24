import { NavLink } from "react-router-dom";
import NavigationProfil from "./NavigationProfil";
import {useLocation} from 'react-router-dom';
import "./Navigation.css";
import {useState} from 'react';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function Navigation() {

  const isRowBased = useMediaQuery('(max-width: 1060px)');
  console.log(isRowBased);

  // const refContainer = useRef(null);

  let page = useLocation().pathname;
  const [opacity, setOpacity] = useState(0);

  // const stl = {
  //   transform : isRowBased ? (opacity ? 'translateX(0%)' : 'translateX(-100%)') : 'none'
  // }

  const stl = {
    opacity: isRowBased ? opacity : 1
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

  if(page === "/"){

    return (
      <div className="navigation flex">
        <div className="content">
          <div className="menuIconBlock">
            <span onClick={change} className="menuIcon">X</span>
          </div>
          <div /*ref={refContainer}*/ style={stl} className="menu flex-end">
            <NavLink to="/Infos" className="nav" exact activeClassName="current">
              Qui sommes-nous ?
            </NavLink>
            <NavigationProfil/>
          </div>
        </div>
      </div>
    );

  }else{

    return (
      <div className="navigation flex">
        <div className="content flex-between">
          <div>
            <NavLink to="/" className="title">
              NetDoc
            </NavLink> 
          </div>
          <div>
            <NavLink to="/Recherche" className="nav" exact activeClassName="current">
              Trouver un médecin
            </NavLink>
            <NavLink to="/Infos" className="nav" exact activeClassName="current">
              Qui sommes-nous ?
            </NavLink>
            <NavigationProfil/>
          </div>
        </div>          
      </div>
    );

  } 
}

    
export default Navigation;