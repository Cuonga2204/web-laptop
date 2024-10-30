
import express from "express";

import { createUser } from "../controllers/userController"; 

const router = express.Router();


router.post("/sign-up", createUser as any); 

export default router;
