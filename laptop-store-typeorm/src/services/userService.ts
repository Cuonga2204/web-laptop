import { User } from "../entity/User";
import { AppDataSource } from "../config/data-source";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";

interface NewUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
}

export class UserService {
    private static userRepository: Repository<User> = AppDataSource.getRepository(User);

    static async createUser(newUser: NewUser) {
        const { name, email, password, phone } = newUser;

        try {
            console.log(`test UserService`);
            // Kiểm tra xem email đã tồn tại hay chưa
            const existingUser = await this.userRepository.findOneBy({ email });
            if (existingUser) {
                return {
                    status: 'OK',
                    message: 'This email is already in use'
                };
            }

            // Hash mật khẩu
            const hash = bcrypt.hashSync(password, 10);

            // Tạo user mới
            const createdUser = this.userRepository.create({
                name,
                email,
                password: hash,
                phone
            });

            // Lưu user vào database
            await this.userRepository.save(createdUser);

            return {
                status: 'OK',
                message: 'CREATE SUCCESS',
                data: createdUser
            };

        } catch (error) {
            throw new Error(`Error creating user: ${error}`);
        }
    }
}
