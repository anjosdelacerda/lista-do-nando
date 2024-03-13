import { UserType, UserLoginType } from "../types/user.type";

const comparePassword = (loggedUser: UserLoginType, findUser: UserType) =>{
    const verifyUser = loggedUser.password === findUser.password
    return verifyUser
}

export default comparePassword