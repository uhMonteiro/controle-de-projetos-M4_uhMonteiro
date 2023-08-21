import format from "pg-format";
import { Developer, DeveloperCreate, DeveloperResult, DeveloperUpdate } from "../interfaces";
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

const partialUpdate = async (
    developerId: string,
    payload: DeveloperUpdate
): Promise<Developer> =>{
    const queryFormat: string = format(
        'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )

    const queryResult: DeveloperResult = await client.query(queryFormat, [developerId])
    

    return queryResult.rows[0]
}

const destroy = async (developerId: string): Promise<void> =>{
    await client.query('DELETE FROM "developers" WHERE "id" = $1;', [developerId])
}

export default { create, partialUpdate, destroy }