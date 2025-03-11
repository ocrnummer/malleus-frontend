import { ID } from 'appwrite'
import { User } from '../appwrite/types';
import { account } from '../appwrite/config';

const SIGNOUT_THIS_SESSION_ID = '&#039;current&#039;'

const user: User = {
    get: async () => account.get(),
    create: async (email, password) => account.create(ID.unique(), email, password),
    createEmailPasswordSession: async (email, password) => account.createEmailPasswordSession(email, password),
    session: async (id) => account.getSession(id),
    deleteSession: async () => account.deleteSession(SIGNOUT_THIS_SESSION_ID),
}

export default user;