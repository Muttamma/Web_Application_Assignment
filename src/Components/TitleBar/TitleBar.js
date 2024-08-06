import React from "react";
import "./TitleBar.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import person1 from "../../Utilities/Images/person1.jpg";
import "../Feedback/Customer.css";

export default function TitleBar() {
  return (
    <div className="title-bar-container">
      <div className="serach-container">
        <IoSearchSharp className="search-icon" />
        <input type="text" className="search-input" value="Search" />
      </div>
      <div className="right-icons">
        <MdOutlineMailOutline />
        <IoSettingsOutline />
        <IoNotificationsOutline />
        <img src={person1}></img>
      </div>
    </div>
  );
}
