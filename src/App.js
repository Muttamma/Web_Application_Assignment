import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import TitleBar from "./Components/TitleBar/TitleBar";
import Cards from "./Components/SideBar/DashBoard/Cards";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div style={{ width: "100%" }}>
          <TitleBar />
          <div className="dashboard-container">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
