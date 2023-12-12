import { Request, Response } from "express"
import Accounts, {AccountsTypes} from "../database/models/account"

class AccountService {
    public async createAccount(req: Request, res: Response) {
        const id = res.locals.verifyToken

        const accountDatas: AccountsTypes = req.body

        if (accountDatas.branch.length !== 3) {
            return res.status(400).json({ error: 'Branch must contain only three digits' });
        }

        accountDatas.account = accountDatas.account.replace(/(\d)(?=\d{1}$)/, '$1-')
        accountDatas.people_ID = id.id

        try {
            const createAccount = await Accounts.create(accountDatas)

            const newAccount = {
                id: createAccount.id,
                branch: createAccount.branch,
                account: createAccount.account,
                createdAt: createAccount.createdAt,
                updatedAt: createAccount.updatedAt,
            }

             res.json({response: newAccount})

        } catch (error) {
            return res.json({error: error})
        }
        
    }

    public async getAccount(req: Request, res: Response) {
        const id = res.locals.verifyToken
    
        try {
            const getAccounts = await Accounts.findAll({
                attributes: ['id', 'branch', 'account', 'createdAt', 'updatedAt'],
                where: {
                    people_ID: id.id
                }
            })

            return res.json({accounts: getAccounts})
        } catch (error) {
           return res.json({error: error})
        }
    }

    public async getBalance(req: Request, res: Response) {
        const id = req.params

        try {
            const balance = await Accounts.findByPk(id.accountId, {attributes: ['balance']})
            return res.json(balance)
        } catch (error) {
            return res.json({error: error})
        }
    }

    
}

export const account = new AccountService()