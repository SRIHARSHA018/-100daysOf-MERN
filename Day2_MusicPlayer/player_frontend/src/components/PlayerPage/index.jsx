import React, { useState } from 'react';
import './style.css';
import { RenderIfElse } from '../utils';

const PlayerUI = (props) => {
    return <>
        <div className='player_ui'>
            <button className='player_btn control_prev_btn'>
                <span className="material-icons material-symbols-outlined" >skip_previous</span>
            </button>
            <button onClick={props.playhandler} className='player_btn control_play_btn'>
                <RenderIfElse isTrue={props.isPlaying}
                    trueComponent={<span className="material-icons material-symbols-outlined" >pause</span>}
                    falseComponent={<span className="material-icons material-symbols-outlined" >play_arrow</span>}
                ></RenderIfElse>
            </button>
            <button className='player_btn control_next_btn'>
                <span className="material-icons material-symbols-outlined" >skip_next</span>
            </button>
        </div>
        <img className='thumbnail' src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Master_2021_poster.jpg/220px-Master_2021_poster.jpg'}></img>
    </>
}

const PlayerPage = () => {
    const [play, setPlay] = useState(false);
    return <div className='player-page'>
        <h1>Title</h1>
        <h3>author</h3>
        <span className='progress_bar'>
            <progress value={"70"} max="100"></progress>
        </span>
            <PlayerUI isPlaying={play} playhandler={() => setPlay(play => !play)} />
    </div>
}


export default PlayerPage;