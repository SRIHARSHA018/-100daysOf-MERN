import React from 'react';
import './style.css';


const PlayerBody = (props)=>{
    return <div className='player-body'>
        <props.component/>
    </div>
}


export default PlayerBody;