import { mongoose } from "mongoose";

const connectToDb = async () => {
  mongoose.connect(
    `mongodb+srv://${process.env.User}:${process.env.Password}@instagramclone.z4axf51.mongodb.net/?retryWrites=true&w=majority&appName=InstagramClone`
  );
  console.log("database connect");
};

export default connectToDb;
