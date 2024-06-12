const prisma = require("../../utils/db");

const userCreate = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(req.json());

  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: password,
    },
    select: {
      email: true,
    },
  });
  console.log("User created successfully", newUser);
  res.status(200).json({ message: "success", user: newUser });
};

const updateUser = async (req, res, next) => {
  const findUser = await prisma.user.update({
    where: {
      email: "talal2024@gmail.com",
    },
    data: {
      email: "talal@gmail.com",
    },
  });
  res.status(200).json({ message: "Update success", user: findUser });
};

const getUser = async (req, res, next) => {
  const allUser = await prisma.user.findMany();
  res.status(200).json({ message: "success", user: allUser });
};

module.exports = { userCreate, getUser, updateUser };
