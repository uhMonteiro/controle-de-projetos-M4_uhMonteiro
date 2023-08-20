import format from "pg-format";
import { DeveloperInfos,DeveloperInfosCreate,DeveloperInfosResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: DeveloperInfosCreate): Promise<DeveloperInfos> =>{
    const querryFormat: string = format(
        'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )
    const QueryResult: DeveloperInfosResult = await client.query(querryFormat)

    return QueryResult.rows[0]
}

export default {create}