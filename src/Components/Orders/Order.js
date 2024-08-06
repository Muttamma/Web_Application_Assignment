import React from "react";
import person1 from "../../Utilities/Images/person1.jpg";
import person2 from "../../Utilities/Images/person2.jpg";
import person3 from "../../Utilities/Images/person3.jpg";
import person4 from "../../Utilities/Images/person4.jpg";
import person5 from "../../Utilities/Images/person5.jpg";
import person6 from "../../Utilities/Images/person6.jpg";
import "./Order.css";
function Order() {
  const orderItems = [
    {
      img: person1,
      name: "Wade",
      orderNumber: "12346543",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      img: person2,
      name: "Courtney",
      orderNumber: "23456789",
      amount: "$250.00",
      status: "Delivered",
    },
    {
      img: person3,
      name: "Marvin",
      orderNumber: "34567890",
      amount: "$89.99",
      status: "Cancelled",
    },
    {
      img: person4,
      name: "Jane",
      orderNumber: "45678901",
      amount: "$150.50",
      status: "Pending",
    },
    {
      img: person5,
      name: "Eleanor",
      orderNumber: "56789012",
      amount: "$45.00",
      status: "Delivered",
    },
    {
      img: person6,
      name: "Leslie",
      orderNumber: "67890123",
      amount: "$320.00",
      status: "Delivered",
    },
  ];

  return (
    <div className="Order-container">
      <h3>Recent Orders</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>OrderNo</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item) => (
            <>
              <tr>
                <td className="order-td">
                  <img src={item.img} className="person-image"></img>
                  {item.name}
                </td>
                <td>{item.orderNumber}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
