import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const storage = new GridFsStorage({
  url: `mongodb+srv://${process.env.User}:${process.env.Password}@instagramclone.z4axf51.mongodb.net/?retryWrites=true&w=majority&appName=InstagramClone`,
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      console.log("Invalid file type");
      return `${Date.now()}-profileImg-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-profileImg-${file.originalname}`,
    };
  },
});
export default multer({ storage });
