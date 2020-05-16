const SkillDAO = require('../daos/skillDAO')

class SkillService {
  static async getSkills() {
    return await SkillDAO.getSkills();
  }

  static async getSkill(id) {
    return await SkillDAO.getSkill(id);
  }

  static async createSkill(skill) {
    return await SkillDAO.createSkill(skill, { returning: true });
  }

  static async updateSkill(id, fields) {
    return await SkillDAO.updateSkill(id, fields);
  }

  static async deleteSkill(id) {
    return await SkillDAO.deleteSkill(id);
  }
}

module.exports = SkillService;
