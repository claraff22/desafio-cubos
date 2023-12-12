import { Router } from "express";
import { accountRoute } from "./controllers/accountController";
import { peopleRoute } from "./controllers/peopleController";
import { loginRoute } from "./controllers/loginController";


const router: Router = Router() 

router.use('/accounts', accountRoute)
router.use('/people', peopleRoute)
router.use('/login', loginRoute)


export { router }