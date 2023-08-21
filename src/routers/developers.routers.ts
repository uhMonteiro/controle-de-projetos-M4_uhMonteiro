import { Router } from "express"
import { developersControllers } from "../controllers"
import { developerIdExists, uniqueEmail } from "../middlewares"

const developersRouter: Router = Router()

developersRouter.post("",uniqueEmail, developersControllers.create)

developersRouter.use("/:id", developerIdExists)

developersRouter.get("/:id", developersControllers.retrieve)
developersRouter.patch("/:id", uniqueEmail, developersControllers.partialUpdate)
developersRouter.delete("/:id", developersControllers.destroy)

export default developersRouter