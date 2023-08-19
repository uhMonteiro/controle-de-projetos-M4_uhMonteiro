import { QueryResult } from "pg"

type Developer = {
    id: number,
    name: string,
    email: string
}

type DeveloperResult = QueryResult<Developer>
type DeveloperCreate = Omit<Developer, "id">

export {Developer, DeveloperCreate, DeveloperResult}