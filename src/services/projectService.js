const ProjectDAO = require("../daos/projectDAO");
const ImageService = require("./imageService");
const ProjectImageService = require("./projectImageService");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: process.env.CLN_CLOUD_NAME,
  api_key: process.env.CLN_API_KEY,
  api_secret: process.env.CLN_API_SECRET,
});

function uploadPhoto(photo) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "rvllvr" },
      (error, result) => {
        if (result) {
          resolve(result.secure_url);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(photo.data).pipe(uploadStream);
  });
}

class ProjectService {
  static async getProjects() {
    return await ProjectDAO.getProjects();
  }

  static async getProject(id) {
    return await ProjectDAO.getProject(id);
  }

  static async findProject(field) {
    return await ProjectDAO.findProject(field);
  }

  static async createProject(project, cover, images) {
    const uploadedPhoto = await ImageService.uploadImage(cover);
    project.cover_url = uploadedPhoto.url;
    const savedProject = await ProjectDAO.createProject(project, {
      returning: true,
    });
    if (images) {
      await ProjectImageService.createProjectImages(savedProject, images);
    }
    return savedProject;
  }

  static async updateProject(project, cover, images) {
    const id = project.project_id;
    const fields = {
      internal_url: project.internal_url,
      name: project.name,
      show: project.show,
      technologies: project.technologies,
      type: project.type,
      url: project.url,
    };

    if (cover) fields.cover_url = await uploadPhoto(cover);
    const savedProject = await ProjectDAO.updateProject(id, fields);

    if (images) {
      await ProjectImageService.createProjectImages(project, images);
    }
    return savedProject;
  }

  static async deleteProject(id) {
    return await ProjectDAO.deleteProject(id);
  }
}

module.exports = ProjectService;
