import format from "pg-format";
import { Developer, DeveloperCreate, DeveloperResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: DeveloperCreate): Promise<Developer> =>{
    const querryFormat: string = format(
        'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )
    const QueryResult: DeveloperResult = await client.query(querryFormat)

    return QueryResult.rows[0]
}


export default { create }