import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/item";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import './checkout.css'

const Checkout = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("newArrivals");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "https://crownadminn.onrender.com/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center" color="black">
        <div className="check">
          PLease Take a Screenshot to your Cart Items & your Information to US
          in <br /> <b>Instagram</b> <br />
          Account <br /> <InstagramIcon className="icon" />{" "}
          <button className="btn"><a display="" href="https://www.instagram.com/crownbrand7/">
            Click Here
          </a></button>
          <p>
            DON'T WORRY WE ARE DO THAT TO KEEP YOU SAFE AND WANT YOU BE SURE WE ARE WANT YOU HAPPY ALL TIME
          </p>
        </div>
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      ></Box>
    </Box>
  );
};

export default Checkout;
