const ProjectImageDAO = require('../daos/projectImageDAO')
const ImageService = require('./imageService');

class ProjectImageService {
  static async createProjectImages(project, images) {
    if (!Array.isArray(images)) images = [images]
    let savedImages = [];
    for (let i=0; i<images.length; i++) {
      let image = images[i]
      let uploadedImage = await ImageService.uploadImage(image);
      let savedImage = {
        project_id: project.project_id,
        order: i,
        image_url: uploadedImage.url,
        image_cdn_id: uploadedImage.id
      }
      savedImages.push(savedImage);
    }
    return await ProjectImageDAO.bulkCreate(savedImages, { returning: true });
  }

  static async deleteProjectImage(id) {
    let projectImage = await ProjectImageDAO.find(id);
    ImageService.deleteImage(projectImage.image_cdn_id);
    return await ProjectImageDAO.delete(id);
  }
}

module.exports = ProjectImageService;
