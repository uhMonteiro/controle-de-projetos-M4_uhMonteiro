import "express-async-errors"
import express, { Application, json } from "express"
import "dotenv/config"
import { developersRouter, developerInfosRouter, projectsRouter } from "./routers"
import { handleErros } from "./middlewares"

const app: Application = express()
app.use(json())

app.use("/developers", developersRouter)
app.use("/developers", developerInfosRouter)
app.use("/projects", projectsRouter)

app.use(handleErros)

export default app
