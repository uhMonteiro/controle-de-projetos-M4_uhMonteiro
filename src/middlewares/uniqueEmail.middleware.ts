import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";


 const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { email } = req.body
    if(!email){
        return next()
    }
    const query: string = 'SELECT * FROM "developers" WHERE "email" = $1'
    const queryResult: DeveloperResult = await client.query(query,[email])

    if(queryResult.rowCount){
        throw new AppError("Email already exists.",409)
    }
    return next()
}

export  { uniqueEmail }