import { Router } from "express"
import { people } from "../services/peopleService"

const loginRoute: Router = Router()

loginRoute.post('/', people.login)

export {loginRoute} 