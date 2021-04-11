import asyncHandler from "express-async-handler";
import Leaderboard from "../models/Leaderboard.js";

// @desc   get leaderboard scores
// @route  GET api/leaderBoard/
// @access Public
const getLeaderboard = asyncHandler(async (req, res) => {
  const leaderboard = Leaderboard.find(req.body.gameTitle);

  if (Leaderboard) {
    res.json(leaderboard);
  } else {
    res.status(500);
    throw new Error("Leaderboard not found!");
  }
});

// @desc   add leaderboard scores
// @route  POST api/leaderBoard/
// @access Public
const addScore = asyncHandler(async (req, res) => {
  const leaderboard = Leaderboard.find(req.body.gameTitle);

  if (leaderboard) {
    const { userName, userScore } = req.body;
    const { highscores } = leaderboard;

    const newScore = { player: userName, score: userScore };

    leaderboard.highscores = highscores
      .push(newScore)
      .sort((a, b) => b.score - a.score)
      .pop();

    await leaderboard.save();
    res.json(leaderboard.highscores);
  } else {
    res.status(500);
    throw new Error("There was some trouble adding your score, sorry!");
  }
});
