import React from "react";
import "./Header.css";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="header-container">
      <img src="logo.png" className="logo" />
      <div className="action-wrapper">
        <div className="search-bar-wrapper">
          <input className="search-bar" type="text" />
          <SearchOutlinedIcon
            className="search-icon-position"
            sx={{ fontSize: '24px' }} />
        </div>
        <Button>
          <PermIdentityIcon sx={{ color: "rgba(75, 86, 107, 0.8)" }} />
        </Button>

        <ShoppingBagOutlinedIcon sx={{ color: "rgba(75, 86, 107, 0.8)" }} />
      </div>
    </div>
  );
};

export default Header;
