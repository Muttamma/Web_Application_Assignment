import React from "react";
import { ImTarget } from "react-icons/im";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiSolidDish } from "react-icons/bi";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { PiCaretCircleRightFill } from "react-icons/pi";

import "./Goals.css";
export default function Goals() {
  const goalsObject = [
    {
      id: 1,
      name: "Goals",
      icon: <ImTarget />,
    },
    {
      id: 2,
      name: "Popular Dishes",
      icon: <LiaHamburgerSolid />,
    },
    {
      id: 3,
      name: "Menus",
      icon: <BiSolidDish />,
    },
  ];
  return (
    <div className="goal-container">
      {goalsObject.map((item) => (
        <div className="d-flex goals-row">
          <div className={`goals-icon goals-${item.id}`}>{item.icon}</div>
          <div className="goals-name">{item.name}</div>
          <div className="right-goal-icon">
            <PiCaretCircleRightFill />
          </div>
        </div>
      ))}
    </div>
  );
}
