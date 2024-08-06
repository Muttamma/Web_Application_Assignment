import { useEffect, useState } from "react";
import { MdWindow } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiBarChartBoxLine } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import { AiOutlineWallet } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  // const [open, isOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const navigate = useNavigate();

  const MenuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <TiHome />,
      active: false,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <RiBarChartBoxLine />,
      active: false,
    },
    {
      path: "/compliance",
      name: "Compliance",
      icon: <GrCompliance />,
      active: false,
    },
    {
      path: "/wallet",
      name: "Wallet",
      icon: <AiOutlineWallet />,
      active: false,
    },
    {
      path: "/bag",
      name: "Bag",
      icon: <BsFillBagCheckFill />,
      active: false,
    },
  ];
  useEffect(() => {
    navigate("/dashboard");
    setActiveLink(0);
  }, []);

  return (
    <div className="sidebar_container">
      <div className="nav-link" style={{ color: "rgb(58 63 160)" }}>
        <MdWindow />
      </div>
      {MenuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="nav-link"
          onClick={() => {
            setActiveLink(index);
            console.log("dashboard clicked", activeLink);
          }}
          style={index === activeLink ? { color: "rgb(58 63 160)" } : {}}
        >
          <div>{item.icon}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
