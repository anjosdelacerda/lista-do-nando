import { UserType } from "../types/user.type"

const findUser = (email: string) => {
    const localList = localStorage.getItem("listUser")
    const list = localList? JSON.parse(localList) : []
    const user = list.find((user: UserType) => user.email === email)
    return user
}

export default findUser