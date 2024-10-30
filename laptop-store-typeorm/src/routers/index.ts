import express from "express";
import userRoutes from "./userRouter";
const router = express.Router();

router.use("/users", userRoutes);        


export default router;