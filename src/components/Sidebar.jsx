import React, {useState, useEffect} from "react";
import './Sidebar.scss'

const Sidebar = ({spells, setFilteredSpells}) => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    setFilteredSpells(filters[activeFilter])
  },[activeFilter]);

  const filters = {
    all: spells,
    concentration: () =>{
      return spells.filter(x => x.concentration === "yes");
    },
    ritual: ()=>{
      return spells.filter(x => x.ritual === "yes");
    },
    bonus: ()=>{
      return spells.filter(x => x.casting_time === "1 bonus action");
    },
    self: ()=>{
      return spells.filter(x => x.range === "Self");
    },
    healing: ()=>{}
  };

  const handleFilter = (e) => {
    if (e.target.innerText === activeFilter) {
     setFilteredSpells(spells);
    }
    else{
      setActiveFilter(e.target.innerText)
    }
  }
  return (
    <div className="container">
      <h1>Spell <br/>preparation</h1>
      
      <div className="navigation">
          <button onClick={handleFilter}>concentration</button>
          <button onClick={handleFilter}>ritual</button>
          <button onClick={handleFilter}>bonus</button>
          <button onClick={handleFilter}>self</button>
          <button onClick={handleFilter}>healing</button>
      </div>
      
      <div className="icons">
      </div>
    </div>
  );
};

export default Sidebar;
