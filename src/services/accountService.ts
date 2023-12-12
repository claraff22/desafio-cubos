import { Request, Response } from "express"


class Account {
    public async createAccount(req: Request, res: Response) {
        console.log('funciona')
    }
}

export const account = new Account()