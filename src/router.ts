import { Router } from "express";
import { accountRoute } from "./controllers/accountController";
import { peopleRoute } from "./controllers/peopleController";
import { loginRoute } from "./controllers/loginController";
import { authorization } from "./middlewares/authorization";


const router: Router = Router() 

router.use('/accounts', authorization.authorization, accountRoute)
router.use('/people', peopleRoute)
router.use('/login', loginRoute)


export { router }