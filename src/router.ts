import { Router } from "express";
import { accountRoute } from "./controllers/accountController";


const router: Router = Router() 

router.use('/accounts', accountRoute)

export { router }