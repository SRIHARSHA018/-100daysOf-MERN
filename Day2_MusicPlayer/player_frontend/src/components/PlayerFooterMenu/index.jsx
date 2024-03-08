import React, { useState } from 'react';
import './style.css';

const FooterMenuOption = (props)=>{
    const isSelected = (props.optionSelected == props.iconTitle);
    return <div><span className={(isSelected?'footer-selected fade-in ':'fade-out ')+`icon material-icons material-symbols-outlined`} onClick={()=>props.optionHandler(props.iconTitle)}>{props.iconTitle}</span></div>
}

const PlayerFooterMenu = (props)=>{
    return <div className='player-foot-container'>
    {props.footerMenu.map((option)=>{
        return <FooterMenuOption optionSelected={props.selectedOption} key={option} iconTitle={option} optionHandler={props.handler}></FooterMenuOption>
    })}
    </div>
}


export default PlayerFooterMenu;