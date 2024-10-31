import { AppDataSource } from "./config/data-source"
import express from "express";
import cors from "cors";
import routes from "./routers"
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((error) => console.log("Database connection error:", error));

const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`Server running on port ${PORT}`);
});
