import { FavoriteBorder } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useState } from "react";
function Notifications() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="each-icons" onClick={handleOpen}>
        <FavoriteBorder id="icons" />
        <p>Notifications</p>
      </div>
      <Drawer open={open} onClose={handleClose}>
        <p>Notifications will be here...!</p>
      </Drawer>
    </>
  );
}

export default Notifications;
