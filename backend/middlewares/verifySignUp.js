const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

// Function to check duplications for username and email
const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // For Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Sorry! Username is already in use!"
      });
      return;
    }

    // For Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Sorry! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

// Function to check if roles in the request is legit or not
const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Sorry,  ${req.body.roles[i]} role does not exist!`
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
