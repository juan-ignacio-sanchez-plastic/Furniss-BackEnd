'use strict';

const jwt = require('jsonwebtoken');
// const User = require('../models/User');  to add when the model is created
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = async (req, res, next) => {
  try {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) return res.sendStatus(403);
    const token = authHeaders.split(' ')[1];

    const { email } = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ where: { email: email } });
    if (!user) return res.sendStatus(401);
    req.user = user;
    next();
  } catch (e) {
    res.sendStatus(401);
  }
}

module.exports = authMiddleware;
