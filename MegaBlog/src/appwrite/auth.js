import conf from "../conf/conf";
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
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
        } catch (err) {
            console.error("error in createAccount");
        }
    }

    async login(email, password) {
        try {
            await this.account.createEmailSession(email, password);
        } catch (err) {
            console.error("error in Login");
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (err) {
            console.error("err in getCurrentUser");
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (err) {
            console.error("err in logout");
        }
    }
}

const authService = new AuthService();

export default authService;