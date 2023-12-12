import { Request, Response } from "express"
import Accounts from "../database/models/account"


class AccountService {
    public async createAccount(req: Request, res: Response) {
        return res.json({ok: 'foi'})

        // interface AccountsBody {
        //     id?: string;
        //     branch?: number;
        //     account?: string;
        //     balance?: number;
        //     createdAt?: Date;
        //     updatedAt?: Date;
        //   }

        // const accountDatas: AccountsBody = req.body

        // async function createAccount(accountDatas: any){
        //     try {
        //         const createAccount = await Accounts.create(accountDatas)
        //     } catch (error) {
                
        //     }
        // }
    }
}

export const account = new AccountService()