import { Request, Response } from "express"
import People, {PeopleTypes} from "../database/models/people"
import 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class PeopleService {
    public async createPeople(req: Request, res: Response){

        const peopleDatas: PeopleTypes = req.body

        peopleDatas.document = peopleDatas.document.replace(/\D/g, '')
        
        const peopleExist = await People.findAll({
            where:{
                document: peopleDatas.document
            }
        })

        const hashPassword = await bcrypt.hash(peopleDatas.password, 10)

        peopleDatas.password = hashPassword

        if (peopleExist.length === 0){
            try {
                const createdPeople = await People.create(peopleDatas)

                const newPeople = {
                    id: createdPeople.id,
                    name: createdPeople.name,
                    document: createdPeople.document,
                    createdAt: createdPeople.createdAt,
                    updatedAt: createdPeople.updatedAt
                }

                return res.json({response: newPeople})
            } catch (error) {
                return res.status(500).json({error: error})
            }
        } else {
            return res.status(400).json({error: 'people already exists'})
        }
        
        
    }

    public async login(req: Request, res: Response){
        const { document, password } = req.body

        const validPeople = await People.findAll({
            where: {
                document: document,
            }
        })

        const verifyPassword = await bcrypt.compare(password, validPeople[0].password )

        if (validPeople.length === 0) {
            return res.status(404).json({error: 'Invalid login'})
        } else if (!verifyPassword) {
            return res.status(404).json({error: 'Invalid password'})
        } else {
            const token = jwt.sign({id:  validPeople[0].id}, process.env.JWT_TOKEN!, {expiresIn: '10m'})
            return res.json({token: `Bearer ${token}`})
        }

        

    }
}

export const people = new PeopleService()