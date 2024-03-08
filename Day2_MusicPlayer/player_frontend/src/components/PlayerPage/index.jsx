import React from 'react';
import './style.css';

const PlayerUI = () => {
    return <>
        <div className='player_ui'>
            <button className='player_btn control_prev_btn'>
                <span class="material-icons material-symbols-outlined" >skip_previous</span>
            </button>
            <button className='player_btn control_play_btn'>
                <span class="material-icons material-symbols-outlined" >play_arrow</span>
            </button>
            <button className='player_btn control_next_btn'>
                <span class="material-icons material-symbols-outlined" >skip_next</span>
            </button>
        </div>
        <img className='thumbnail' src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Master_2021_poster.jpg/220px-Master_2021_poster.jpg'}></img>
    </>
}

const PlayerPage = () => {
    return <div className='player-page'>
        <h1>Title</h1>
        <h3>author</h3>
        <span className='progress_bar'>
            <progress value={"70"} max="100"></progress>
        </span>
        <PlayerUI />
    </div>
}


export default PlayerPage;