import conf from "../conf/conf";
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new client();
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.account.login(email, password);
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error(error);
        }
    }

    async login(email, password) {
        try {
            await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error(error);
        }
    }
}

const authService = new AuthService();

export default authService;