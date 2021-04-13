import mongoose from "mongoose";
import dotenv from "dotenv";
import Leaderboard from "./models/Leaderboard.js";
import leaderboardData from "./data/leaderboardData.js";
import connectDb from "./config/db";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Leaderboard.deleteMany();

    const createdLeaderboard = await Leaderboard.insertMany(leaderboardData);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
