import { User } from "../entity/User";
import { AppDataSource } from "../config/data-source";

export class UserService {
    static async createUser(userData: { name: string; email: string; password: string; phone: string }) {
        const { name, email, password, phone } = userData;
        try {
            const userRepository = AppDataSource.getRepository(User);
            const newUser = userRepository.create({
                name,
                email,
                password,
                phone,
                isAdmin: false // Giá trị mặc định
            });
    
            const existingUser = await userRepository.findOneBy({ email: email });

            if (existingUser) {
                return {
                    status: 'OK',
                    message: 'This email is already in use'
                };
            }

            await userRepository.save(newUser);

            return {
                status: 'OK',
                message: 'CREATE SUCCESS',
            };

        } catch (error) {
            console.log("Error creating user in service:", error);
            throw new Error(`Error creating user service: ${error}`);
        }
    }
}
