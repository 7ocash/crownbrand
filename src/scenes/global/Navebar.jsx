import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import logo from "../../imgg/c-logo.png";
import "./Navbar.css";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "../global/sidebarData";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="#E3E6F3"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <div
          className="logo"
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          <img src={logo} alt="" />
        </div>
        <div className="lol">
          <IconButton
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                color: "#088178",
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
            onClick={() => navigate("/")}
            display
          >
            Home
          </IconButton>
          <IconButton
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                color: "#088178",
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
            onClick={() => navigate("/shop")}
            display
          >
            Shop
          </IconButton>
          <IconButton
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                color: "#088178",
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
            onClick={() => navigate("/")}
            display
          >
            About Us
          </IconButton>
          <IconButton
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                color: "#088178",
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
            onClick={() => navigate("/contactus")}
            display
          >
            Contact Us
          </IconButton>
        </div>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "#088178" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          <>
            <IconContext.Provider value={{ color: "#088178" }}>
              <div className="navbar">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </IconContext.Provider>
          </>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
