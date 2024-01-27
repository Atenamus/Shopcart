import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
const registerUser = async (req, res) => {
  const { username, email, password, phoneNo, address } = req.body;
  //* check if fields are empty or not
  // if (
  //   [username, email, password, phoneNo, address].some((fields) => {
  //     fields?.trim() === "";
  //   })
  // ) {
  //   throw new apiError(401, "All fields are required");
  // }
  //* check for existing user
  if (await User.findOne({ email })) {
    return res.status(409).json({"message":"user already exists"})
  }
  const user = User.create({
    username,
    email,
    password,
    phoneNo,
    address,
  });
  return res.status(200).json({
    message: "user created successfully",
  });
};
export { registerUser };
