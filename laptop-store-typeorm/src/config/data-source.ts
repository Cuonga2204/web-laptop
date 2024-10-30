import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "laptop-store-project",
    url: 'mongodb://127.0.0.1:27017/laptop-store-project',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
