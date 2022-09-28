const { json } = require('express');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


/**
 * @desc get all user
 * @name Get api/v1/user
 * @access public
 */

const getAllUser = (req, res) => {

    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));


    // send data
    res.json(users)

}
 
/**
 * @desc get all user
 * @name Get api/v1/user
 * @access public
 */

const createUser = (req, res) => {

    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    //get body data
    const {name, cell}= req.body


    //validation
    if (!name || !cell) {
        res.status(400).json(
            {
                message: "name & skill is required"
            }
        )
    } else {

        //data push
        users.push({
            id: Math.floor(Math.random() * 10000000000),
            name: name,
            cell:cell
        });

        //path create for pushed data
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json(
            {
                message: "user created successfully"
            }
        )
        
    }

}
 

//exports controllers
module.exports = {
    getAllUser,
    createUser
}

