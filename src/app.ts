import express, { Application, json } from "express"
import "dotenv/config"
import { developersRouter, developerInfosRouter } from "./routers"

const app: Application = express()
app.use(json())

app.use("/developers", developersRouter)
app.use("/developers", developerInfosRouter)

export default app
