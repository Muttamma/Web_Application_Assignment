import React from "react";
import "./Netprofit.css";
import NetprofitGoal from "./NetprofitGoal";

function Netprofit() {
  return (
    <div className="netprofit-container">
      <div className="netprofit-header d-flex">
        <div className="netprofit">Net Profit</div>
        <div className="profit-amount">$ 6759.25</div>
        <div className="profit-rating ">3%</div>
      </div>
      <NetprofitGoal />
    </div>
  );
}

export default Netprofit;
