type Developers = {
    id: number,
    name: string,
    email: string
}

type DevelopersInfos = {
    id: number,
    developerSince: Date,
    preferredOS: string,
    developerId: number
}

type Projects = {
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate: Date,
    developerId: number
}