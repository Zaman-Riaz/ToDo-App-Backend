// exporting schema
const { Item } = require('../model/listSchema')

const home = (req, res) => {
    res.send('Home page')
};

// function to get list data from database
const getList = async (req, res) => {
    try {
        const list = await Item.find();
        res.status(200).send(list)
    } catch (error) {
        res.status(404).send('Error getting list data', error)
    }
}

// function to post data in database
const postItem = async (req, res) => {
    console.log(req.body.itemName);
    try {
        const item = new Item({
            itemName: req.body.itemName
        })
        let response = await item.save();
        if (response) {
            res.status(201).send('Data added successfully');
        }
    } catch (error) {
        res.status(409).send('Error posting data to database ', error)
    }
}

// function to update list data
const updateItem = async (req, res) => {
    try {
        let id = req.body.id;
        const item = {
            itemName: req.body.itemName
        }
        const updateItem = Item.findByIdAndUpdate(
            id,
            item,
            { new: true },
            (err, data) => {
                if (!err) {
                    // res.send({
                    //     status: true,
                    //     message: ' Item Updated ',
                    //     data: data
                    // });
                    res.send('Data updated successfully')
                }
            }
        )
    }
    catch (err) {
        res.status(500).send(err)
    }
}

// function to delete data from database
const deleteItem = async (req, res) => {
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        // if (!req.params.id) {
        //     return res.send(' Invalid id ')
        // }
        // res.send(deleteItem)
        res.send('Data deleted successfully')
    } catch (error) {
        res.send(error)
    }
}

// function to delete all the list items
const deleteAll = (req, res) => {
    Item.deleteMany({}, (err) => {
        if (!err) res.send('All data deleted successfully!')
    })
}

module.exports = { home, getList, postItem, updateItem, deleteItem, deleteAll } 