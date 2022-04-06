import React, {useEffect} from 'react';
import SpellCard from './components/SpellCard';
import Sidebar from './components/Sidebar';
import Level from './components/Level';

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
  return <SpellCard />
}

export default App;
