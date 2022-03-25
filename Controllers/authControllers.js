const Profile = require("../Models/Profile");
const User = require("../Models/User");

exports.userGetController = async (req, res, next) => {
  const email = req.params.email;

  try {
    const findUser = await User.findOne({ email }).populate({
      path: "profile",
      select: "phone address name",
    });
    console.log(findUser);
    res.json(findUser);
  } catch (err) {
    console.log(err);
  }
};
exports.createUserController = async (req, res, next) => {
  const userData = req.body;

  console.log(userData);
  const newUserData = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    role: null,
  };

  const userProfileData = {
    name: userData.firstName + " " + userData.lastName,
    phone: userData.phone,
    address: userData.address,
    birthDate: userData.birthDate,
  };

  const newUser = new User(newUserData);

  try {
    const createdUser = await newUser.save();

    const newUserProfile = new Profile({
      ...userProfileData,
      user: createdUser._id,
    });
    const createdProfile = await newUserProfile.save();

    const updatedUser = await User.updateOne(
      { email: createdUser.email },
      {
        $set: {
          profile: createdProfile._id,
        },
      }
    );
    res.status(201).json(updatedUser);
  } catch (e) {
    console.log(e);
  }
};
