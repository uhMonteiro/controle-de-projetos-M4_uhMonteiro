import { Router } from "express"
import { projectsControllers } from "../controllers"
import { projectIdExists,} from "../middlewares"

const projectsRouter: Router = Router()

projectsRouter.post("", projectsControllers.create)

projectsRouter.use("/:id", projectIdExists)

projectsRouter.get("/:id", projectsControllers.retrieve)
projectsRouter.patch("/:id", projectsControllers.partialUpdate)

export default projectsRouter