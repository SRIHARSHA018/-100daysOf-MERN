import { useState } from 'react';
import './App.css'
import PlayerBody from './components/PlayerBody';
import PlayerFooterMenu from './components/PlayerFooterMenu';
import PlayerHeader from './components/PlayerHeader/PlayerHeader';
import HomePage from './components/HomePage';
import ExplorePage from './components/ExplorePage';
import LibraryPage from './components/LibraryPage';
import PlayerPage from './components/PlayerPage';

function App() {
  const [selectedOption, setSelectedOption] = useState('home')
  const footerMenu = ['home', 'explore', 'library_music', 'play_circle'];

  const PageMap ={
    'home':HomePage,
    'explore':ExplorePage,
    'library_music':LibraryPage,
    'play_circle':PlayerPage
  };
  
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  }
  
  return (
    <>
      <div className='app__container'>
        <PlayerHeader />
        <PlayerBody component={PageMap[selectedOption]}/>
        <PlayerFooterMenu handler={handleOptionSelection} footerMenu={footerMenu} selectedOption={selectedOption} />
      </div>
    </>
  )
}

export default App
