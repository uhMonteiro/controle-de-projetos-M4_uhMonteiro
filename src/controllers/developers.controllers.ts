import { Request, Response } from "express";
import { Developer } from "../interfaces";
import { developerServices } from "../services";


const create = async (req: Request, res: Response): Promise<Response> =>{
    const developer: Developer = await developerServices.create(req.body)
    return res.status(201).json(developer)
}

const retrieve = async (req: Request, res: Response): Promise<Response> =>{
    const developer: Developer = await developerServices.retrieve(req.params.id)
    
    return res.status(200).json(developer)
}

const partialUpdate = async (req: Request, res: Response): Promise<Response> =>{
    const { body } = req
    const {id} = req.params
   
    const developer: Developer = await developerServices.partialUpdate(id, body)

    return res.status(200).json(developer)
}

const destroy = async (req: Request, res: Response): Promise<Response> =>{
    await developerServices.destroy(req.params.id)
    return res.status(204).json()
}

export default { create, retrieve, partialUpdate, destroy }