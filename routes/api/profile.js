const express = require('express')
const router = express.Router()

//@route    GET   api/users
//@desc     Test users endpoint
//@access   Public
router.route("/").get(userController)



//@route    GET   api/users:uid
//@desc     Test users endpoint
//@access   private




module.exports = router