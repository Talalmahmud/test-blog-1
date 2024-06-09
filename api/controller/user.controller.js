const userCreate = async (req, res, error) => {
  //   res.status = 200;
  //   res.json = { message: "Hello" };
  //   return res;
  // res.status(200).json("<h1>Hello GFG Learner!</h1>");
  res.status(200).json({ message: "Helllo" });
};

module.exports = { userCreate };
