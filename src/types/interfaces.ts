export interface User {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    gender: string
    dob: Date
    password: string
    isVerify: boolean
}
export interface Categorie {
    id?: string
    title: string
    content: string
}

export interface Tag {
    id?: string
    title: string
    content: string
}
