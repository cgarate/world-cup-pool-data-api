import mongoose from "mongoose";

const Schema = mongoose.Schema;

const  matchSchema = new Schema({
  away_result: Number,
  away_team: Number,
  date: Date,
  finished: Boolean,
  home_result: Number,
  home_team: Number,
  matchday: Number,
  name: Number,
  stadium: Number,
  type: String,
});

const groupSchema = new Schema({
  id: Number,
  matches: [matchSchema],
  name: String,
  runnerUp: String,
  winner: String,
});

const Group = mongoose.model("Group", groupSchema);
export default Group;
