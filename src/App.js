import React, {useEffect, useState} from 'react';
import './App.scss';
import fetchSpells from './utils/fetchSpells'
import SpellCard from './components/SpellCard';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const url = 'https://api.open5e.com/spells/';

  const [spells, setSpells] = useState([])

  useEffect(() => {
    fetchSpells(url)
    .then((r) => setSpells(r))
  }, []);
  return(
    <div className='app'>
    <Sidebar />
    <Dashboard spells={spells}/>
    </div>
  );
}

export default App;
