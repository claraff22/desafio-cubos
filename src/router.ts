import { Router } from "express";
import { accountRoute } from "./controllers/accountController";
import { peopleRoute } from "./controllers/peopleController";

const router: Router = Router() 

router.use('/accounts', accountRoute)
router.use('/people', peopleRoute)

export { router }