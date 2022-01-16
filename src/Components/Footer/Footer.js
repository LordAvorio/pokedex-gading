import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import ListAltIcon from "@mui/icons-material/ListAlt";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import "./footer.css";

function Footer() {
  const [redirectTo, setRedirectTo] = useState("homeLink");

  const navigate = useNavigate();

  const redirectPage = (val) => {
    console.log(val)
    if (val === "homeLink") {
      navigate("/");
    } else if (val === "myPokemonLink") {
      navigate("/mycollection");
    }
  };

  return (
    <>
      <div className="footerLayout">
        <BottomNavigation
          showLabels
          value={redirectTo}
          onChange={(event, newValue) => {
            redirectPage(newValue)
            setRedirectTo(newValue);
          }}
        >
          <BottomNavigationAction
            label="List Pokemon"
            icon={<ListAltIcon />}
            value="homeLink"
          />
          <BottomNavigationAction
            label="My Pokemon"
            icon={<CatchingPokemonIcon />}
            value="myPokemonLink"
          />
        </BottomNavigation>
      </div>
    </>
  );
}

export default Footer;
