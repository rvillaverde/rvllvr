module.exports = function(sequelize, DataTypes) {
  const ProjectImage = sequelize.define('project_image', {
    image_url: {
      type: DataTypes.STRING
    },
    order: {
      type: DataTypes.INTEGER
    }
  },
  {
    freezeTableName: true
  });

  ProjectImage.associate = function(models) {
    ProjectImage.belongsTo(models.project, {
      foreignKey: "project_id",
      as: "project",
    });
  }

  return ProjectImage;
}

