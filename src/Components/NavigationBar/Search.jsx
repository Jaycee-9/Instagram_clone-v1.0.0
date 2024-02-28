import { Search } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useState } from "react";
function SearchComponent() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div className="each-icons" onClick={toggleDrawer(true)}>
        <Search id="icons" />
        <p>Seacrh</p>
      </div>
      <Drawer open={open} onClose={toggleDrawer()}>
        <p>Search component will be here...!</p>
      </Drawer>
    </>
  );
}

export default SearchComponent;
