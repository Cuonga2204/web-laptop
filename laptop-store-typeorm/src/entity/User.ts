import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"
// id, name, email, password, isAdmin, phone, createdAt, updatedAt
@Entity()
export class User {
    
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    // @Column()
    // isAdmin:boolean

    // @Column()
    // phone:string

    // @Column()
    // createdAt:Date

    // @Column()
    // updatedAt:Date
}
