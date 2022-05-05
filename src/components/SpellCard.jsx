import React from "react";
import './SpellCard.scss'

const SpellCard = ({data}) => {
  const slashSeparator = (strng) =>{
    return strng.split(', ')
              	.filter(x => x !== 'Ritual Caster')
                .join(' | ');
  }
  return (
    <div className="card">
      <section className="header">
        <div className="title">{data.name}</div>
        <div className="school">{data.school}</div>
        <div className="level">{data.level_int === 0 ? "C" : data.level_int}</div>
      </section>
      <section className="stats">
        <div className="casting">
          <h3>casting time</h3>
          <p>{data.casting_time}</p>
        </div>
        <div className="range">
          <h3>range</h3>
          <p>{data.range}</p>
        </div>
        <div className="components">
          <h3>components</h3>
          <p>{slashSeparator(data.components)}</p>
        </div>
        <div className="duration">
          <h3>duration</h3>
          <p>{data.duration}</p>
        </div>
      </section>
      <section className="icons">

      </section>
      <section className="castor">
        <p>{slashSeparator(data.dnd_class)}</p>
        <hr />
      </section>
    </div>
  );
};

export default SpellCard;
