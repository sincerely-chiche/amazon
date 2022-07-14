const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

console.log(cloudinary.config());

// Uploads an image file
/////////////////////////
const uploadImage = async (file) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: "products",
  };

  try {
    //Upload the image
    const result = await cloudinary.uploader.upload(file, options);
    return result.secure_url;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

module.exports = uploadImage;
