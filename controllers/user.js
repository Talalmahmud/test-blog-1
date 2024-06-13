const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  const userList = await prisma.user.findMany();
  res.status(200).json({ success: true, users: userList });
};
const createUser = async (req, res) => {
  const { email, password } = req.body;
  const encryptPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: encryptPassword,
    },
    select: {
      email: true,
      name: true,
    },
  });

  res.status(301).json({ success: true, user: newUser });
};

const updateUser = async (req, res) => {
  const { email, password, name } = req.body;
  const encryptPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: encryptPassword,
      name: name,
    },
    select: {
      email: true,
      name: true,
    },
  });

  res.status(301).json({ success: true, user: newUser });
};

module.exports = { getUsers, createUser, updateUser };
