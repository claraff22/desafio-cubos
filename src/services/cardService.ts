import { Request, Response } from "express"
import Card, {CardTypes} from "../database/models/card"
import People from "../database/models/people"
import Accounts from "../database/models/account"

class CardService {
    public async createCard(req: Request, res: Response) {

        const id = req.params

        const cardDatas: CardTypes = req.body

        console.log(id.accountId)
        cardDatas.account_ID = id.accountId

        const physicalCardVerify = await Card.findAll({
            where: {
                type: 'physical',
                account_ID: cardDatas.account_ID
            }
        })

        if (physicalCardVerify.length !== 0 && cardDatas.type === 'physical') {
            return res.status(422).json({error: "It is not allowed to create more than one physical card."})
        }

        if (cardDatas.cvv.length !== 3){
            return res.status(400).json({error: "Cvv must contain three digits"})
        }

        try {
            const createCard = await Card.create(cardDatas)

            const newCard = {
                id: createCard.id,
                type: createCard.type,
                number: createCard.number.slice(-4),
                cvv: createCard.cvv,
                createdAt: createCard.createdAt,
                updatedAt: createCard.updatedAt,
            }

            return res.json({newCard})
        } catch (error) {
            console.log(error)
            return res.json({error: error})
        }
    }

    public async getAllCards(req: Request, res: Response){

        const id = req.params

        try {
            const allCardsAccount = await Card.findAll({
                where: {
                    account_ID: id.accountId
                }
            })

            allCardsAccount.forEach((card) => {
                card.number = card.number.slice(-4)
            })

            return res.json({cards: allCardsAccount})
        } catch (error) {
            return res.json({error: error})
        }
    }

    public async AllCardsPeople(req: Request, res: Response){

        const id = res.locals.verifyToken

        try {
            const getAllCardPeople = await Accounts.findAll({
                attributes: ['id'], 
                where: {
                    people_ID: id.id
                },
                include: [{
                    model: Card,
                    attributes: ['id', 'type', 'number', 'cvv', 'createdAt', 'updatedAt']
                }]
            })
                

            return res.json({ getAllCardPeople})
        } catch (error) {
            console.log(error)
            return res.json({error: error})
        }
    }

}

export const card = new CardService()