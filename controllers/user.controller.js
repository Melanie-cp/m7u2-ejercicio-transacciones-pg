
export const getAllUsers = (req, res) => {
    console.log(req.query)
    res.send('Hello world!')
}

export const getUser = (req, res) => {
    console.log(req.params)
    res.send('Hello world!')
}

export const createUser = (req, res) => {
    console.log(req.body)
    res.send('Hello world!')
}

export const deleteUser = (req, res) => {
    console.log(req.params)
    res.send('Hello world!')
}

export const updateUser = (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send('Hello world!')
}