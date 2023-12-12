import { Router } from "express"
import { people } from "../services/peopleService"


const peopleRoute: Router = Router()

peopleRoute.post('/', people.createPeople)


export {peopleRoute} 