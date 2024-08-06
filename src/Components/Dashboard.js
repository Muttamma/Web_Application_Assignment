import React from "react";
import Cards from "./SideBar/DashBoard/Cards";
import Netprofit from "./Netprofit/Netprofit";
import FirstChart from "./Charts/FirstChart";
import Order from "./Orders/Order";
import Goals from "./Goals/Goals";
import Customers from "./Feedback/Customers";

function Dashboard() {
  return (
    <div>
      <h3 className="ta-l" style={{ padding: "20px" }}>
        Dashboard
      </h3>{" "}
      <div className="d-flex">
        <Cards />
        <Netprofit />
      </div>
      <div className="d-flex">
        <FirstChart />
        <Goals />
      </div>
      <div className="d-flex">
        <Order />
        <Customers />
      </div>
    </div>
  );
}

export default Dashboard;
