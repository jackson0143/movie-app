const User = require("../models/userModel");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {});
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  
  try {
    const user = await User.signup(email, password, firstname, lastname);

    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
