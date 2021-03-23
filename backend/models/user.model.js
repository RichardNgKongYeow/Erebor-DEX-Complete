// To set up the model that represents the user registration details 
// in MySQL Database, defining the 5 fields required.

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING      
      },
      lastname: {
        type: Sequelize.STRING      
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };