import React, { useState } from "react";

// DATA
import rates from "../Assets/currency.js";

const Main = () => {
  // STATES
  const [cur1, setCur1] = useState(0);
  const [cur2, setCur2] = useState(0);

  // FUNCTIONS
  const convertCur1 = (event) => {
    setCur1(event.target.value);
  };

  const convertCur2 = (event) => {
    setCur2(event.target.value);
  };

  const convertUsdToEur = () => {
    const result = (Number(cur2) * rates.EUR) / rates.USD;
    setCur1(result);
  };

  const convertEurToUsd = () => {
    const result = (Number(cur1) * rates.USD) / rates.EUR;
    setCur2(result);
  };

  return (
    <main>
      <div className="converter">
        <input type="number" value={cur1} onChange={convertCur1} />
        <span>€</span>
      </div>
      <div className="emoji">
        <span onClick={convertUsdToEur} className="up">
          🔼
        </span>
        <span onClick={convertEurToUsd} className="down">
          🔽
        </span>
      </div>

      <div className="converter">
        <input type="number" value={cur2} onChange={convertCur2} />
        <span>$</span>
      </div>
    </main>
  );
};

export default Main;
