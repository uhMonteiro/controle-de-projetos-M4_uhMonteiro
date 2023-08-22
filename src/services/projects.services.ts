import format from "pg-format"
import { Projects, ProjectsCreate, ProjectsResult, ProjectsUpdate } from "../interfaces"
import { client } from "../database"

const create = async (payload: ProjectsCreate): Promise<Projects> =>{
    const querryFormat: string = format(
        'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )
    const QueryResult: ProjectsResult = await client.query(querryFormat)

    return QueryResult.rows[0]
}

const partialUpdate = async (
    projectId: string,
    payload: ProjectsUpdate
): Promise<Projects> =>{
    const queryFormat: string = format(
        'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )

    const queryResult: ProjectsResult = await client.query(queryFormat, [projectId])

    return queryResult.rows[0]
}

const retrieve = async (projectId: string): Promise<Projects> =>{
    const query: string = `
    SELECT 
      "p"."id" AS "projectId",
      "p"."name" AS "projectName",
      "p"."description" AS "projectDescription",
      "p"."repository" AS "projectRepository",
      "p"."startDate" AS "projectStartDate",
      "p"."endDate" AS "projectEndDate",
      "d"."name" AS "projectDeveloperName"
    FROM "developers" AS "d"
    RIGHT JOIN "projects" AS "p"
      ON "d"."id" = "developerId"
    WHERE "p".id = $1;
    `

    const queryResult: ProjectsResult = await client.query(query, [projectId])

    return queryResult.rows[0]
}

export default { create, partialUpdate, retrieve }