import { Router } from "express"
import { account } from "../services/accountService"
import { authorization } from "../middlewares/authorization"
import { card } from "../services/cardService"
import { transaction } from "../services/trasanctionService"

const accountRoute: Router = Router()

accountRoute.post('/', account.createAccount )
accountRoute.get('/', account.getAccount)

accountRoute.post('/:accountId/cards', card.createCard)
accountRoute.get('/:accountId/cards', card.getAllCards )
accountRoute.get('/cards', card.AllCardsPeople)

accountRoute.post('/:accountId/transactions', transaction.createTransaction)
accountRoute.get('/:accountId/transactions', transaction.getAllTransaction) 



accountRoute.get('/:accountId/balance', account.getBalance)



export {accountRoute}