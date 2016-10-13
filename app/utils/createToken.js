const jwt = require('jsonwebtoken');

function createToken(admin) {
  return jwt.sign(admin, process.env.JWT_SECRET, { expiresIn: 10080 });
}

module.exports = createToken;
