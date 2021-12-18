exports.createUserController = async (req, res, next) => {
  const userData = req.body;

  const newUserData = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    role: null,
    profile: "",
  };
};
