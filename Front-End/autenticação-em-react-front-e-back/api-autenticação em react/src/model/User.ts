import { UserDB } from "../dtos/user/signup.dto"

export interface UserModel {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(value: string): void {
        this.email = value
    }

    public getPassword(): string {
        return this.password
    }

    public setPassword(value: string): void {
        this.password = value
    }

    public toDBModel(): UserDB {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password
        }
    }
}



