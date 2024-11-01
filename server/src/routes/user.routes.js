import { Router } from "express";
import multer from "multer";
import { registerUser } from "../controllers/user.controllers.js";

// Set up multer storage (you can also use `diskStorage` if you want to save files on disk)
const storage = multer.memoryStorage(); // Change to `diskStorage` if needed
const upload = multer({ storage });

const router = Router();

// Define route with file upload
router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

export default router;
