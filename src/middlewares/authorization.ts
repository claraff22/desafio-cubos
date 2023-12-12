import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

class AuthorizationMiddleware {
    public async authorization(req: Request, res: Response, next: NextFunction){
        const {authorization} = req.headers
    
        try {
            const token = authorization!.split(' ')[1]
            const verifyToken = jwt.verify(token, process.env.JWT_TOKEN!)
            next()
        } catch (error) {
            return res.status(401).json({error: 'Unathourized access '})  
        }
            
        }
    
}

export const authorization = new AuthorizationMiddleware()