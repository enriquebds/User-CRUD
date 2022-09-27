import users from "../database/users";
import {v4 as uuidv4} from "uuid"
import * as bcrypt from "bcryptjs"

const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10)

    const userExists = users.find((user) => user.email === email)

    if(userExists){
        return {message: "This email already being used"}
    }

    const newUser = {
        uuid: uuidv4(),
        createdOn: new Date(),
        updateOn: new Date(),
        name,
        email,
        password: hashedPassword
    }

    users.push(newUser)

    const infos = {
        uuid: newUser.uuid, 
        createdOn: newUser.createdOn, 
        updatedOn: newUser.updatedOn, 
        name: newUser.name, 
        email: newUser.email, 
        isAdm: newUser.isAdm
    }

    return infos
}

export default createUser