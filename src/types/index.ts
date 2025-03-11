import { Models } from "appwrite";

export interface IAd extends Models.Document {
    title: string,
    body: string
}

export interface IUser extends Models.Document {
    name: string,
}