import { AddBox } from "@mui/icons-material";
import PostDialog from "./PostDialog";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
function Create() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="each-icons" onClick={handleClick}>
        <AddBox id="icons" />
        <p>Create</p>
      </div>
      <div>
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
          <MenuItem onClick={handleClose}>
            <PostDialog />
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default Create;
