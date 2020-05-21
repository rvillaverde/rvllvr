const ProjectDAO = require('../daos/projectDAO')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

cloudinary.config({
  cloud_name: process.env.CLN_CLOUD_NAME,
  api_key: process.env.CLN_API_KEY,
  api_secret: process.env.CLN_API_SECRET
})

function uploadPhoto(photo) {
  return new Promise((resolve, reject) => {
   let uploadStream = cloudinary.uploader.upload_stream(
     { folder: "rvllvr" },
     function(error, result) {
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

  static async createProject(project, cover) {
    project.cover_url = await uploadPhoto(cover);
    return await ProjectDAO.createProject(project, { returning: true });
  }

  static async updateProject(project, cover) {
    let id = project.project_id;
    let fields = { 
      name: project.name,
      technologies: project.technologies,
      url: project.url
    }
    if (cover) fields.cover_url = await uploadPhoto(cover);
    return await ProjectDAO.updateProject(id, fields);
  }

  static async deleteProject(id) {
    return await ProjectDAO.deleteProject(id);
  }
}

module.exports = ProjectService;
