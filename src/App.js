import React, {useEffect} from 'react';
import './App.scss'
import SpellCard from './components/SpellCard';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const url = 'https://api.open5e.com/spells/';

  const getSpells = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
  }

  useEffect(() => {
    getSpells();
  });
  return(
    <div className='app'>
    <Sidebar />
    <Dashboard />
    </div>
  );
}

export default App;
