const Photo = require("../models/Photo");

const mongoose = require("mongoose");
const User = require("../models/User");

//Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file.filename;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    //Create a phot
    const newPhoto = await Photo.create({
      image,
      title,
      userId: user._id,
      userName: user.name,
    });

    //if photo was created successfull, return data
    if (!newPhoto) {
      return res.status(422).json({
        errors: ["Houve um problema, por favor tente novamente mais tarde."],
      });
    }

    return res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errors: [
        "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
      ],
    });
  }
};

//Remove a photo from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    //check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada!"] });
      return;
    }

    //Check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {
      res
        .status(422)
        .json({ errors: ["Ocorreu um erro, por favor tente mais tarde."] });
    }
    await Photo.findByIdAndDelete(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada!"] });
    return;
  }
};

//Get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

//Get user photos
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["created", -1]])
    .exec();

  return res.status(200).json(photos);
};

//Get photo by id
const getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;

    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    //Check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada"] });
      return;
    }
    res.status(200).json(photo);
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
  }
};

//Update a photo
const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const reqUser = req.user;

  const photo = await Photo.findById(id);

  //check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  //Check if photo belongs to user
  if (!photo.userId.equals(reqUser._id)) {
    res
      .status(422)
      .json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
    return;
  }

  if(title) {
    photo.title = title
  }

  await photo.save()
  
  res.status(200).json({photo, message: "Foto atualizada com sucesso!"})
};

//Like functionalitty

const likePhoto = async(req, res) => {
    const {id} = req.params

    const reqUser = req.user

    const photo = await Photo.findById(id)

      //check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  //Check if user already liked the photo
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: ["Você já curtiu a foto"]})
    return 
  }

  //Put user id in likes array
  photo.likes.push(reqUser._id)

  photo.save()

  res.status(200).json({photoId: id, userId: reqUser._id, message: "A foto foi curtida."})
}


module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
};
