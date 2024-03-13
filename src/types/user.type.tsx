export type UserLoginType = {
    email: string 
    password: string
}

export type UserType = UserLoginType & {
    id: string
    name: string
    dataNascimento: Date
}