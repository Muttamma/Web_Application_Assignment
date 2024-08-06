import React from "react";
import { IoStar } from "react-icons/io5";
import person1 from "../../Utilities/Images/person1.jpg";
import person2 from "../../Utilities/Images/person2.jpg";
import person3 from "../../Utilities/Images/person3.jpg";
import "./Customer.css";
export default function Customers() {
  const feedbackObject = [
    {
      id: 1,
      name: "Jenni Wilson",
      rating: 4,
      feedback:
        "The food was delicious and the service was prompt. The ambiance made for a delightful dining experience.Absolutely fantastic! The staff was incredibly friendly, and the dishes were exquisite. Will definitely come back",
      img: person1,
    },
    {
      id: 2,
      name: "Michael Smith",
      rating: 5,
      feedback:
        "Absolutely fantastic! The staff was incredibly friendly, and the dishes were exquisite. Will definitely come back.",
      img: person2,
    },
    {
      id: 3,
      name: "Emily Johnson",
      rating: 3,
      feedback:
        "The food was good, but the waiting time was longer than expected. Overall, a decent experience.",
      img: person3,
    },
  ];

  return (
    <div className="feedback-container">
      <h2>Customer's Feedback</h2>
      {feedbackObject.map((person) => (
        <div className="feedback-header">
          <div className="feedback-name">
            <img src={person.img} className="feedback-img"></img>
            <div style={{ paddingLeft: "10px" }}> {person.name}</div>
          </div>
          <div>
            {Array(5)
              .fill()
              .map((_, i) => (
                <IoStar
                  key={i}
                  style={
                    (person.id === 1 || person.id === 3) && i === 4
                      ? { color: "white" }
                      : { color: "yellow" }
                  }
                />
              ))}
          </div>
          <div id="feedback">{person.feedback}</div>
        </div>
      ))}
    </div>
  );
}
