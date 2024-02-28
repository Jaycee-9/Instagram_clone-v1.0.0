import { AddPhotoAlternate } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { useState } from "react";
import img from "../../public/images/image-gallery.png";

const dialogStyle = {
  height: "60%",
  width: "70%",
};

function PostDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div onClick={handleOpen}>
      <div className="menuItem">
        <p>Post</p>
        <AddPhotoAlternate id="icons" />
      </div>
      <Dialog
        id="upload-dialog"
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: dialogStyle }}
      >
        <div className="post-dialog-fields">
          <div className="post-dialog-heading">
            <h4>Create new post</h4>
          </div>
          <div className="post-dialog-form">
            <img src={img} alt="upload" />
            <input type="file" id="fileupload" style={{ display: "none" }} />
            <label htmlFor="fileupload">
              <p>Select from computer</p>
            </label>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default PostDialog;
