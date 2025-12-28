import { PrismaClient } from "@prisma/client";

// import pkg from "@prisma/client";

// const { PrismaClient } = pkg;

export const prisma = new PrismaClient();

export async function checkDbConnection() {
  try {
    await prisma.$connect();
    // console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed");
    process.exit(1);
  }
}
