import React, { useState } from "react";

// DATA
import rates from "../assets/currency.js";

const Main = () => {
  // STATES
  const [currency1, setCurrency1] = useState(0);
  const [currency2, setCurrency2] = useState(0);

  // FUNCTIONS
  const convertCurrency1 = (event) => {
    setCurrency1(event.target.value);
  };

  const convertCurrency2 = (event) => {
    setCurrency2(event.target.value);
  };

  const convertUsdToEur = () => {
    const result = (Number(currency2) * rates.EUR) / rates.USD;
    setCurrency1(result);
  };

  const convertEurToUsd = () => {
    const result = (Number(currency1) * rates.USD) / rates.EUR;
    setCurrency2(result);
  };

  return (
    <main>
      <div className="converter">
        <input type="number" value={currency1} onChange={convertCurrency1} />
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
        <input type="number" value={currency2} onChange={convertCurrency2} />
        <span>$</span>
      </div>
    </main>
  );
};

export default Main;
