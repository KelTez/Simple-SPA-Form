const UserDetail = require('../models/spa-user-model')
/* Made a bunch of request types, but only create is really needed */

createUserDetail = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No users',
        })
    }

    const userDetail = new UserDetail({
        fName : body.fName,
        lName : body.lName,
        product : body.product,
        pNumber : body.pNumber,
        email : body.email,
        ease : body.ease,
        comfort : body.comfort,
        recommend : body.recommend
    })

    if (!userDetail) {
        return res.status(400).json({ success: false, error: err })
    }

    userDetail
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: userDetail._id,
                message: 'New user details created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User details not created',
            })
        })
}

updateUserDetail = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    UserDetail.findOne({ _id: req.params.id }, (err, userDetail) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'No user details found!',
            })
        }
        userDetail.fName = body.fName
        userDetail.lName = body.lName
        userDetail.product = body.product
        userDetail.pNumber = body.pNumber
        userDetail.email = body.email
        userDetail.ease = body.ease
        userDetail.comfort = body.comfort
        userDetail.recommend = body.recommend
        userDetail
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: userDetail._id,
                    message: 'User details updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User details not updated!',
                })
            })
    })
}

deleteUserDetail = async (req, res) => {
    await UserDetail.findOneAndDelete({ _id: req.params.id }, (err, userDetail) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userDetail) {
            return res
                .status(404)
                .json({ success: false, error: `Details not found` })
        }

        return res.status(200).json({ success: true, data: userDetail })
    }).catch(err => console.log(err))
}

getUserDetailById = async (req, res) => {
    await UserDetail.findOne({ _id: req.params.id }, (err, userDetail) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userDetail) {
            return res
                .status(404)
                .json({ success: false, error: `Details not found` })
        }
        return res.status(200).json({ success: true, data: userDetail })
    }).catch(err => console.log(err))
}

getUserDetails = async (req, res) => {
    await UserDetail.find({}, (err, userDetails) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!userDetails.length) {
            return res
                .status(404)
                .json({ success: false, error: `Details not found` })
        }
        return res.status(200).json({ success: true, data: userDetails })
    }).catch(err => console.log(err))
}

module.exports = {
    createUserDetail,
    updateUserDetail,
    deleteUserDetail,
    getUserDetails,
    getUserDetailById,
}