import { Router } from "express"
import { account } from "../services/accountService"

const accountRoute: Router = Router()

accountRoute.post('/', account.createAccount )
accountRoute.get('/', )

accountRoute.post('/:accountId/cards')
accountRoute.get('/:accountId/cards')
accountRoute.get('/cards')

accountRoute.post(':accountId/transactions')
accountRoute.get(':accountId/transactions')
accountRoute.get(':accountId/transactions')

accountRoute.get(':accountId/balance')



export {accountRoute}