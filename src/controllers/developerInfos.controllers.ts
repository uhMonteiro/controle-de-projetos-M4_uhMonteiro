import { Request, Response } from "express";
import { DeveloperInfos, DeveloperInfosCreate, DeveloperInfosResult } from "../interfaces";
import { developerInfosServices } from "../services";
import { client } from "../database";
import { AppError } from "../errors";


const create = async (req: Request, res: Response): Promise<Response> =>{
    const { id } = req.params
    
    
    const developerInfos: DeveloperInfos = await developerInfosServices.checkInfos(id)

    if(developerInfos){
        throw new AppError("Developer infos already exists.", 409)
    }

    const payload: DeveloperInfosCreate = {
        ...req.body,
        developerId: req.params.id
    }
    const developerInfo: DeveloperInfos = await developerInfosServices.create(payload)
    return res.status(201).json(developerInfo)
}

export default { create }