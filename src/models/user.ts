import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  type: String,
  username: String,
});

const User = mongoose.model("Team", userSchema);
export default User;
