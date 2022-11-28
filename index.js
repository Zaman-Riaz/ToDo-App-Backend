
// importing API functions module
const { home, getList, postItem, updateItem, deleteItem, deleteAll } = require('./controllers/list')

// importing database conncetion module
require('./database/connection')

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const express = require('express')
const app = express()

app.use(express.json());
let port = process.env.PORT || 3000;

app.get('/', home)
app.post('/post', postItem)
app.get('/todo_list', getList)
app.delete('/delete_item/:id', deleteItem)
app.post('/update_item', updateItem)
app.delete('/delete_all', deleteAll)

app.listen(port, () => {
    console.log('listening to port: ', port);
})
