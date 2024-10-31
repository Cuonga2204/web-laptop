import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({ default: false })
    isAdmin!: boolean;

    @Column()
    phone!: string;

    @CreateDateColumn() // Tự động tạo ngày
    createdAt!: Date;

    @UpdateDateColumn() // Tự động cập nhật ngày
    updatedAt!: Date;
}
