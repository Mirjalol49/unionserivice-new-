import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat">
        <h2><span className="white-text">10</span><span className="blue-text">+</span></h2>
        <p>YEARS OF SERVICE</p>
      </div>
      <div className="divider"></div>
      <div className="stat">
        <h2><span className="white-text">50</span><span className="blue-text">K</span></h2>
        <p>HAPPY CLIENTS</p>
      </div>
      <div className="divider"></div>
      <div className="stat">
        <h2><span className="white-text">99</span><span className="blue-text">%</span></h2>
        <p>CUSTOMER SATISFACTION</p>
      </div>
    </section>
  );
};

export default Stats;