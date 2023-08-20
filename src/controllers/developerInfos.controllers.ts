import { Request, Response } from "express";
import { DeveloperInfos, DeveloperInfosCreate } from "../interfaces";
import { developerInfosServices } from "../services";


const create = async (req: Request, res: Response): Promise<Response> =>{
    const payload: DeveloperInfosCreate = {
        ...req.body,
        developerId: req.params.id
    }
    const developerInfo: DeveloperInfos = await developerInfosServices.create(payload)
    return res.status(201).json(developerInfo)
}

export default { create }