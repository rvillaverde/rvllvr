module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: { 
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return User;
}
