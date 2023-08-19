import { Request, Response } from "express";
import { Developer } from "../interfaces";
import { developerServices } from "../services";


const create = async (req: Request, res: Response): Promise<Response> =>{
    const developer: Developer = await developerServices.create(req.body)
    return res.status(201).json(developer)
}

export default { create }