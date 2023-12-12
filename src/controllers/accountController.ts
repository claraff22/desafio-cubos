import { Router } from "express"
import { account } from "../services/accountService"
import { authorization } from "../middlewares/authorization"

const accountRoute: Router = Router()

accountRoute.post('/', authorization.authorization, account.createAccount )
accountRoute.get('/', authorization.authorization, account.getAccount)

accountRoute.post('/:accountId/cards')
accountRoute.get('/:accountId/cards')
accountRoute.get('/cards')

accountRoute.post(':accountId/transactions')
accountRoute.get(':accountId/transactions')
accountRoute.get(':accountId/transactions')

accountRoute.get(':accountId/balance')



export {accountRoute}