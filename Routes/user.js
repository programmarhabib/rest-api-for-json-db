const express = require('express');
const { getAllUser, createUser } = require('../Controllers/userControllers');


// create a router
const router = express.Router();


// user routes
router.get('/', getAllUser)
router.post('/', createUser)


// router export
module.exports = router;