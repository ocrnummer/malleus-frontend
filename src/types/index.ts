import { Models } from "appwrite";

export interface IAd extends Models.Document {
    title: string,
    body: string
}