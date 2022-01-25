const User = require('./../models/Users');



exports.register = (req, res, next) => {
    const {username,email,password} req.body;

    try {
        const user = await User.create({
            username,email,password
        });

        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error: error.message,
        })
    }
}


exports.login = (req, res, next) => {
    res.send("Login Route")
}


exports.forgotPassword = (req, res, next) => {
    res.send("Forgot Password Route")
}


exports.resetPassword = (req, res, next) => {
    res.send("Reset Password Route")
}

  