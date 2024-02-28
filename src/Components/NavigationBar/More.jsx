import { Menu, MenuItem } from "@mui/material";
import { DensityMedium } from "@mui/icons-material";
import { useState } from "react";

function More() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    console.log("logout nhi ho rha hai");
  };

  return (
    <div>
      <div className="footer-icons" onClick={handleClick}>
        <DensityMedium id="icons" />
        <p>More</p>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem
          id="menuItem"
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
export default More;
