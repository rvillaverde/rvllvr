const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

cloudinary.config({
  cloud_name: process.env.CLN_CLOUD_NAME,
  api_key: process.env.CLN_API_KEY,
  api_secret: process.env.CLN_API_SECRET
})

class ImageService {
  static async uploadImage(image) {
    return new Promise((resolve, reject) => {
     let uploadStream = cloudinary.uploader.upload_stream(
       { folder: "rvllvr" },
       function(error, result) {
         if (result) {
           resolve({ url: result.secure_url, id: result.public_id })
         } else {
           reject(error);
         }
       }
     );
   
     streamifier.createReadStream(image.data).pipe(uploadStream);
    });
  }

  static async deleteImage(id){
    cloudinary.api.delete_resources([ id ]);
  }
}

 module.exports = ImageService;
