import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

function Menu({opacity, setOpacity}) {

    const history = useHistory();

    useEffect(() => {
        return history.listen(() => {
            if(opacity === 1){
                change();                
            }
        }) 
     })

    const [disabled, setDisabled] = useState(false);

    var tl = gsap.timeline({onComplete : end});

    function end(){
        setDisabled(false);
    }

    function change(){
        if(!disabled){
            setDisabled(true);
            if(opacity === 0){
                setOpacity(1);
                tl.to(CSSRulePlugin.getRule('.menuIcon'), {duration: 0, cssRule: {background : 'transparent'}}, 'start');
                tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.3, cssRule: {translateY : '-1px'}},'start');
                tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.4, cssRule: {rotate : '45deg'}},'end');
                tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.3, cssRule: {translateY : '-1px'}},'start');
                tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.4, cssRule: {rotate : '-45deg'}},'end');                
            }else{
                setOpacity(0);
                tl.to(CSSRulePlugin.getRule('.menuIcon::before'), {duration: 0.7, cssRule: {translateY : '-10px', rotate : '0deg'}},'same');
                tl.to(CSSRulePlugin.getRule('.menuIcon::after'), {duration: 0.7, cssRule: {translateY : '10px', rotate : '0deg'}},'same');
                tl.to(CSSRulePlugin.getRule('.menuIcon'), {duration: 0.5, cssRule: {background : 'white'}}, 'same');
            }
        }      
    }

    return (
        <div onClick={change}  className="menuIconBlock">
            <div  className="menuIcon"></div>
        </div>
    );
  }  
export default Menu;