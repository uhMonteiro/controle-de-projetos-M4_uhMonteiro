import { Router } from "express"
import { developerInfosControllers } from "../controllers"

const developerInfosRouter: Router = Router()

developerInfosRouter.post("/:id/infos", developerInfosControllers.create)

export default developerInfosRouter