import React, {  useState } from 'react';
import './PlayerHeader.css';

const PlayerHeader = () => {
    const [inputBoxAnimation,setInputBoxAnimation] = useState('');
    const [searchIcon,setSearchIcon] = useState('search');

    const handleSearch = ()=>{
        if(searchIcon === 'search'){
            setInputBoxAnimation('slide-in-right');
            setSearchIcon('close');
        }else{
            setInputBoxAnimation('slide-out-right');
            setSearchIcon('search');
        }
    }
    return <div className='header__container'>
        <div className='header_left_container'>
            <div><span className="material-icons material-symbols-outlined logo">music_note</span></div>
            <div className="title">Music</div>
        </div>
        <div className='search_box'>
            <input className={'Search_input_box '+inputBoxAnimation} placeholder='Search song...'></input>
            <button onClick={()=>handleSearch()}>
                <span className=" material-icons material-symbols-outlined">{searchIcon}</span>
            </button>
        </div>
    </div>;
};


export default PlayerHeader;