import { Router } from "express"
import { developersControllers } from "../controllers"
import { uniqueEmail } from "../middlewares"

const developersRouter: Router = Router()

developersRouter.post("",uniqueEmail, developersControllers.create)

export default developersRouter