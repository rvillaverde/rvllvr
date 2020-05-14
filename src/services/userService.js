const UserDAO = require('../daos/userDAO')

class UserService {
  static async getUsers() {
    return await UserDAO.getUsers();
  }

  static async getUser(id) {
    return await UserDAO.getUser(id);
  }

  static async findByField(field) {
    return await UserDAO.findByField(field);
  }

  static async createUser(user) {
    const savedUser = await UserDAO.createUser(user, { returning: true });
    return savedUser.user_id;
  }
}

module.exports = UserService;
