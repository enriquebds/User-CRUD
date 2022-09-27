import createUser from "../services/createUser";

const createUserController = async (req, res) => {    
    const {name, email, password} = req.body

    const user = await createUser(name, email, password)

    return res.status(201).json(user)
}

export default createUserController