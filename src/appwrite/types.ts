import { Models } from "appwrite";
import { IAd, IUser } from "../types";

/**
 * Payload types
 */

export type AdPayload = {
    title: string,
    body: string,
}

/**
 * Collection types
 */

export type AdsCollection = {
    get: (id: string) => Promise<IAd>;
    list: (queries?: string[]) => Promise<Models.DocumentList<IAd>>;
    create: (payload: AdPayload, permissions?: string[], id?: string) => Promise<IAd>;
    update: (id: string, payload: AdPayload, permissions?: string []) => Promise<IAd>;
    delete: (id: string) => Promise<object>;
}

export type UsersCollectionn = {
    get: (id: string) => Promise<IUser>;
    list: (queries?: string[]) => Promise<Models.DocumentList<IUser>>;
}

/**
 * Database type
 */

export type Database = {
    ads: AdsCollection,
    users: UsersCollectionn
}

/**
 * Account types
 */

export type User = {
    get: () => Promise<Models.User<Models.Preferences>>;
    create: (email: string, password: string) => Promise<Models.User<Models.Preferences>>;
    createEmailPasswordSession: (email: string, password: string) => Promise<Models.Session>;
    session: (id: string) => Promise<Models.Session>;
    deleteSession: () => Promise<object>;
}