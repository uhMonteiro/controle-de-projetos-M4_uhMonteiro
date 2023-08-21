import { Router } from "express"
import { projectsControllers } from "../controllers"
import { developerIdProjectsExists, projectIdExists,} from "../middlewares"

const projectsRouter: Router = Router()

projectsRouter.post("", developerIdProjectsExists, projectsControllers.create)

projectsRouter.use("/:id", projectIdExists)

projectsRouter.get("/:id", projectsControllers.retrieve)
projectsRouter.patch("/:id", developerIdProjectsExists, projectsControllers.partialUpdate)

export default projectsRouter