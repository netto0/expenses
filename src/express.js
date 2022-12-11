const express = require("express")
// Fake database
let users = []
// Criar o app
const app = express()

// Aplicar Middlewares
app.use(express.json())

app.post('/users', (req, res) => {
    const {id, name, email, password} = req.body
    const user = {id, name, email, password}
    users.push(user)
    return res.status(201).json(user)
})

app.get('/users', (req, res) => {
    const allUsers = users
    return res.status(200).json(allUsers)
})

app.get('/users/:user_id', (req, res) => {
    const {user_id } = req.params
    const user = users.find((user) => user.id === user_id)
    if (!user) res.status(404).json("not found")
    return res.status(200).json(user)
})

app.delete('/users/:user_id', (req, res) => {
    const {user_id} = req.params
    const filteredUsers = users.filter(user => user.id !== user_id)
    users = filteredUsers
    return res.status(204).json(filteredUsers)
})

app.patch('/users/:user_id', (req,res) => {
    const {name, email, password} = req.body
    const {user_id} = req.params
    const user = users.find(user => user.id === user_id)
    user.id = user.id
    user.name = name ? name : user.name
    user.email = email ? email : user.email
    user.password = password ? password : user.password
    return res.status(200).json(user)
})

// Rodar o servidor
app.listen(3333, () => console.log("Server is Running"))