import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";


const handleErros = (error: unknown, req:Request, res:Response, next: NextFunction): Response =>{
    if(error instanceof AppError){
        return res.status(error.status).json({ message: error.message})
    }
    
    return res.status(500).json({error: "Internal server error"})
}

export { handleErros }