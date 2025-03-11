import { ID } from "appwrite";
import { databases } from "../appwrite/config.ts";
import { Database } from "../appwrite/types.ts";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
const OLLECTION_ID_ADS = import.meta.env.VITE_COLLECTION_ID_ADS
const COLLECTION_ID_USERS = import.meta.env.VITE_COLLECTION_ID_USERS

const db: Database = {
    ads: {
        get: async (id) => databases.getDocument(DATABASE_ID, OLLECTION_ID_ADS, id),
        list: async (queries = []) =>
            databases.listDocuments(
                DATABASE_ID, 
                OLLECTION_ID_ADS, 
                queries
            ),
        create: async (
            payload, 
            permissions, 
            id = ID.unique()
        ) =>
            databases.createDocument(
                DATABASE_ID,
                OLLECTION_ID_ADS,
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
                OLLECTION_ID_ADS,
                id,
                payload,
                permissions
            ),
        delete: async (id) => databases.deleteDocument(DATABASE_ID, OLLECTION_ID_ADS, id),
    },
    users: {
        get: async (id) => databases.getDocument(DATABASE_ID, COLLECTION_ID_USERS, id),
        list: async (queries = []) =>
            databases.listDocuments(
                DATABASE_ID, 
                COLLECTION_ID_USERS, 
                queries
            ),
    }
};

export default db;