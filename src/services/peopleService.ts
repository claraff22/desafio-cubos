import { Request, Response } from "express"
import People, {PeopleTypes} from "../database/models/people"

class PeopleService {
    public async createPeople(req: Request, res: Response){

        const peopleDatas: PeopleTypes = req.body

        peopleDatas.document = peopleDatas.document.replace(/\D/g, '')

        console.log(peopleDatas)

        try {
            const createdPeople = await People.create(peopleDatas)
            return res.json({response: createdPeople})
        } catch (error) {
            return res.json({error: error})
        }
        
    }
}

export const people = new PeopleService()