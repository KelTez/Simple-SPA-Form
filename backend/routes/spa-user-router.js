const express = require('express')
const UserDetailCtrl = require('../controllers/spa-user-controller')
const router = express.Router()

/* only post is necessary, but made the others as well */
router.post('/userDetails', UserDetailCtrl.createUserDetail)
router.put('/userDetails/:id', UserDetailCtrl.updateUserDetail)
router.delete('/userDetails/:id', UserDetailCtrl.deleteUserDetail)
router.get('/userDetails/:id', UserDetailCtrl.getUserDetailById)
router.get('/userDetails', UserDetailCtrl.getUserDetails)

module.exports = router