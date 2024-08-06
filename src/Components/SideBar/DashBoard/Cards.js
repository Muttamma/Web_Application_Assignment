import { FaBasketShopping } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBagX } from "react-icons/tb";
import { TbAdjustmentsDollar } from "react-icons/tb";
import "./Cards.css";
const Cards = () => {
  const DashBoardCards = [
    {
      id: 1,
      name: "Total Orders",
      noOfOrders: 75,
      rating: "3%",
      icon: <FaBasketShopping />,
    },
    {
      id: 2,
      name: "Total Delivered",
      noOfOrders: 70,
      rating: "-3%",
      icon: <TbShoppingBagCheck />,
    },
    {
      id: 3,
      name: "Total Cancelled",
      noOfOrders: "05",
      rating: "3%",
      icon: <TbShoppingBagX />,
    },
    {
      id: 4,
      name: "Total Revenue",
      noOfOrders: "$12K",
      rating: "-3%",
      icon: <TbAdjustmentsDollar />,
    },
  ];
  return (
    <div style={{ width: "60%" }}>
      {/* <h3 className="ta-l" style={{ padding: "20px" }}>
        Dashboard
      </h3> */}
      <div onClick={() => console.log("Dashboard clicked")}></div>
      <div className="cards-container">
        {DashBoardCards.map((item) => (
          <div className="cards">
            <div className={`card-icon cards-${item.id}`}> {item.icon}</div>
            <div className="cards-name">{item.name}</div>
            <div className="d-flex rating-container">
              {" "}
              <div className="cards-name">{item.noOfOrders}</div>
              <div
                className="cards-rating"
                style={
                  item.id % 2 === 0 ? { color: "red" } : { color: "green" }
                }
              >
                {item.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
