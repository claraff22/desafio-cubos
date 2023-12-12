import { Router } from "express"
import { account } from "../services/accountService"
import { authorization } from "../middlewares/authorization"
import { card } from "../services/cardService"

const accountRoute: Router = Router()

accountRoute.post('/', account.createAccount )
accountRoute.get('/', account.getAccount)

accountRoute.post('/:accountId/cards', card.createCard)
accountRoute.get('/:accountId/cards', card.getAllCards )
accountRoute.get('/cards', card.AllCardsPeople)

accountRoute.post(':accountId/transactions')
accountRoute.get(':accountId/transactions')
accountRoute.get(':accountId/transactions')

accountRoute.get(':accountId/balance')



export {accountRoute}