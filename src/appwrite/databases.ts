import { AdType } from "../pages/SearchAds/SearchAds.tsx";
import { databases } from "./config.ts";
import { ID, Models } from "appwrite";

type AdPayload = {
    title: string,
    body: string,
}

type Collection = {
    get: (id: string) => Promise<AdType>;
    list: (queries?: string[]) => Promise<Models.DocumentList<AdType>>;
    create: (payload: AdPayload, permissions?: string[], id?: string) => Promise<AdType>;
    update: (id: string, payload: AdPayload, permissions?: string []) => Promise<AdType>;
    delete: (id: string) => Promise<object>;
}

type Database = {
    ads: Collection
}

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
const ADS_COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID_ADS

const db: Database = {
    ads: {
        get: async (id) => databases.getDocument(DATABASE_ID, ADS_COLLECTION_ID, id),
        list: async (queries = []) =>
            databases.listDocuments(
                DATABASE_ID, 
                ADS_COLLECTION_ID, 
                queries
            ),
        create: async (
            payload, 
            permissions, 
            id = ID.unique()
        ) =>
            databases.createDocument(
                DATABASE_ID,
                ADS_COLLECTION_ID,
                id,
                payload,
                permissions
            ),
        update: async (
            id, 
            payload, 
            permissions,
        ) =>
            databases.updateDocument(
                DATABASE_ID,
                ADS_COLLECTION_ID,
                id,
                payload,
                permissions
            ),
        delete: async (id) => databases.deleteDocument(DATABASE_ID, ADS_COLLECTION_ID, id),
    }
};

export default db;