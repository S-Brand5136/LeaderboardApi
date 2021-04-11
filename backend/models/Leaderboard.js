import mongoose from "mongoose";
const { Schema } = mongoose;

const leaderBoardSchema = new Schema(
  {
    gameTitle: {
      type: String,
      required: true,
    },
    highScores: [
      {
        player: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Leaderboard = mongoose.model("Leaderboard", leaderBoardSchema);

export default Leaderboard;
