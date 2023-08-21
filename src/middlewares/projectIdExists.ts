import { NextFunction, Request, Response } from "express";
import { Projects, ProjectsResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";


export const projectIdExists = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { id } = req.params

    const queryResult: ProjectsResult = await client.query('SELECT * FROM "projects" WHERE "id" = $1', 
    [id]
    )

    if(!queryResult.rowCount){
        throw new AppError("Projects not found.",404)
    }

    const foundProjects: Projects = queryResult.rows[0]
    res.locals = {...res.locals, foundProjects}

    return next()
}