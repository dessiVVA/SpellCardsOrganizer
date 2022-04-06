import React from "react";
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="container">
      <h1>Spell <br/>preparation</h1>
      
      <div className="navigation">
          <a href="#">concentration</a>
          <a href="#">ritual</a>
          <a href="#">bonus</a>
          <a href="#">self</a>
          <a href="#">healing</a>
      </div>
      
      <div className="icons">
      </div>
    </div>
  );
};

export default Sidebar;
