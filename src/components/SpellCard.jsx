import React from "react";

const SpellCard = () => {
  return (
    <div className="card">
      <section className="header">
        <div className="title">Spell Title</div>
        <div className="school">school</div>
        <div className="level">2</div>
      </section>
      <section className="stats">
        <div className="casting">
          <h3>casting time</h3>
          <p>1 action</p>
        </div>
        <div className="range">
          <h3>range</h3>
          <p>60 feet</p>
        </div>
        <div className="components">
          <h3>components</h3>
          <p>v | s | m</p>
        </div>
        <div className="duration">
          <h3>duration</h3>
          <p>1 hour</p>
        </div>
      </section>
      <section className="icons">

      </section>
      <section className="castor">
        <p>sorcerer | warlock | wizard</p>
        <hr />
      </section>
    </div>
  );
};

export default SpellCard;
