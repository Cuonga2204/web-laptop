// userController.ts
import { Request, Response } from "express";
import { UserService } from "../services/userService";

// Định nghĩa rõ ràng kiểu trả về của createUser
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;

        // Kiểm tra các trường bắt buộc
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(400).json({
                status: 'ERR',
                message: 'All fields are required'
            });
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Invalid email format'
            });
        }

        // Kiểm tra khớp mật khẩu
        if (password !== confirmPassword) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Passwords do not match'
            });
        }

        // Gọi hàm createUser từ UserService để tạo người dùng mới
        const response = await UserService.createUser(req.body);

        return res.status(201).json(response);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            status: 'ERR',
            message: "Error creating user"
        });
    }
};
