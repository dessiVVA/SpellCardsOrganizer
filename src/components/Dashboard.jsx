import "./Dashboard.scss";
import Level from "./Level";
import SpellCard from "./SpellCard";

const Dashboard = () => {
  return (
    <div className="dash__container">
      <div className="pick__section">
        <div className="levels">
          <Level />
          <Level />
          <Level />
          <Level />
          <Level />
          <Level />
          <Level />
          <Level />
          <Level />
        </div>
        <div className="spell_counter">
          <p>0/3</p>
          <p>1/6</p>
          <p>1/4</p>
          <p>1/2</p>
          <p>0/0</p>
          <p>0/0</p>
          <p>0/0</p>
          <p>0/0</p>
          <p>0/0</p>
        </div>
        <div className="cards">
          <SpellCard />
          <SpellCard />
          <SpellCard />
          <SpellCard />
          <SpellCard />
          <SpellCard />
        </div>
      </div>
      <div className="review__section">
        <div className="currently_selected">

        </div>
        <div className="buttons">

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
