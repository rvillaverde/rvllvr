module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define('project', {
    project_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    technologies: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    cover_url: {
      type: DataTypes.STRING
    },
    description_en: {
      type: DataTypes.STRING
    },
    description_es: {
      type: DataTypes.STRING
    },
    order: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true
  });

  Project.associate = function(models) {
    Project.hasMany(models.project_image, { foreignKey: "project_id", as: "images" });
  }

  return Project;
}
