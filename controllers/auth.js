const User = require('./../models/Users');
const ErrorResponse = require("./../utils/errorResponse");


exports.register = async (req, res, next) => {
    const {username,email,password} = req.body;

    try {
        const user = await User.create({
            username,email,password
        });

        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        // res.status(500).json({
        //     success:false,
        //     error: error.message,
        // })

        next(error);
    }
}


exports.login = async (req, res, next) => {
    const { email,password } = req.body;


    // checking email or pass input field
    if(!email || !password){
        // res.status(400).json({ success: false, error: "Please provide email and password and password" })

        return next( new ErrorResponse("Please provide email and password and password", 400) );
    }

    // checking the existence of that user


    // finding email
    try {
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            // res.status(400).json({ success: false, error:"invalid credentials" })

            return next( new ErrorResponse("invalid credentials", 401) );
        }

        // comparing password (user password matches or not)
        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            // res.status(400).json({ success:false, error:"invalid credentials " });

            return next( new ErrorResponse("invalid credentials", 401) );
        }

        res.status(200).json({
            success:true,
            token: "asdsgsdadg"
        })


    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }

}


exports.forgotPassword = (req, res, next) => {
    res.send("Forgot Password Route")
}


exports.resetPassword = (req, res, next) => {
    res.send("Reset Password Route")
}

  