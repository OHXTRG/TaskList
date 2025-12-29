import { asyncWrapper } from "../utils/asyncWrapper.js";
import { createCustomError } from "../utils/createError.js";
import joi from "joi";
import bcrypt from "bcrypt";
import * as userServices from "../prismaServices/user.services.js";

const registerApiSchema = joi.object({
  username: joi.string().required("username is required"),
  email: joi.string().required("email is required"),
  password: joi.string().required("password is required"),
});

export const registerController = asyncWrapper(async (req, res, next) => {
  const { error, value } = registerApiSchema.validate(req.body);
  if (error) {
    console.log(error, "validation error");
    throw createCustomError(400, error.details.message);
  }

  const { email, username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await userServices.createUser({
    email,
    username,
    password: hashedPassword,
  });

  res.status(201).json({
    status: 201,
    success: true,
    message: `user registered successfully`,
    data: user,
  });
});
