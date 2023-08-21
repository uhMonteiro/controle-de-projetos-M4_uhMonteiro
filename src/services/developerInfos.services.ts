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

const checkInfos = async(id: string): Promise<DeveloperInfos> =>{
    const query: string = `
    SELECT * FROM "developerInfos"
    WHERE "developerId" = $1;
    `

    const queryResult: DeveloperInfosResult = await client.query(query, [id])

    return queryResult.rows[0]
}

export default {create, checkInfos}