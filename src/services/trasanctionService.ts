import { Request, Response } from "express"
import Transaction, {TransactionTypes} from "../database/models/transaction"
import Accounts from "../database/models/account"
import { CreatedAt, UpdatedAt } from "sequelize-typescript"
import { account } from "./accountService"

class TransactionService {
    public async createTransaction(req: Request, res: Response){

        const id = req.params

        const transactionDatas: TransactionTypes = req.body

        transactionDatas.account_ID = id.accountId      

        try {
            if (transactionDatas.type === 'debit'){

                const balanceAccount = await Accounts.findByPk(id.accountId)
    
                const total = balanceAccount!.balance - transactionDatas.value
    
                if (total < 0) {
                    return res.status(402).json({error: "Insufficient funds"})
                } else {
                    balanceAccount!.balance = total
                    await balanceAccount!.save()
                }
                
            }

            const createTransaction = await Transaction.create(transactionDatas)

            const newTransaction = {
                id: createTransaction.id,
                value: createTransaction.value,
                description: createTransaction.description,
                createdAt: createTransaction.createdAt,
                updatedAt: createTransaction.updatedAt
            }

            return res.json({newTransaction})

        } catch (error) {
            return res.status(500).json({error: error})
        }
    }

    public async getAllTransaction(req: Request, res: Response){
        const id = req.params

        const {type, search} = req.query

        try {
            const queryOptions: any = {
                attributes: ['id', 'type', 'description', 'createdAt', 'updatedAt'], 
                where: { account_ID: id.accountId },
              };
            
              if (type) {
                queryOptions.where.type = type
              }
          
              if (search) {
                queryOptions.where.description = search
              }
              
            const getAllTransaction = await Transaction.findAll(queryOptions)

            return res.json({transactions: getAllTransaction })
        } catch (error) {
            
            return res.status(500).json({error: error})
        }
    }
}

export const transaction = new TransactionService()