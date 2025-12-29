import { prisma } from "../../db/postgresDB.js";
import bcrypt from "bcrypt";

export const createUser = (user) => {
  return prisma.users.create({ data: user });
};
