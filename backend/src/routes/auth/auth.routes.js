import express from "express";
import { registerController } from "../../controller/auth.controller.js";
import { createCustomError } from "../../utils/createError.js";
const router = express.Router();

/**
 * @openapi
 * /api/v1/auth/test:
 *  get:
 *      summary : Test auth api
 *      tags : [Test]
 *      responses :
 *        200 :
 *          description : success
 */
router.route("/test").get((req, res) => {
  // throw createCustomError(404, "this is custom error");
  res.send("auth routes are working");
});

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 format: password
 *                 example: StrongP@ss123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */

router.route("/register").post(registerController);

export default router;
