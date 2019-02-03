import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  emoji: String,
  fifaCode: String,
  flag: String,
  id: Number,
  iso2: String,
  name: String,
});

const Team = mongoose.model("Team", teamSchema);
export default Team;
