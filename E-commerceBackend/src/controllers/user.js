import { TryCatch } from "../middlewares/error.js"
import { User } from "../models/user.js"

//---------------------------------------------------creating new user

export const newUser = TryCatch(async (req, res, next) => {
    const { name, email, photo, gender, _id, dob } = req.body;

    //if user account already created chceking with id 

    let user = await User.findById(_id);

    if (user)
        return res.status(200).json({
            success: true,
            message: `Welcome back,${user.name}`,
        });

    // if user does not fill all fields

    if (!_id || !name || !email || !photo || !gender || !dob)
        return res.status(400).json({
            success: false,
            message: `Please add all the field`,
        });


    // if user are new account created 

    user = await User.create({
        name, email, photo, gender, _id, dob: new Date(dob)
    })

    return res.status(200).json({
        success: true,
        message: `Welcome,${user.name}`,
    });
})


export const getallUsers = TryCatch(async (req, res, next) => {
    const users = await User.find({})
    return res.status(200).json({
        success: true,
        users,

    });

});


//---------------------------------------------------get user details by id

export const getUser = TryCatch(async (req, res, next) => {

    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {

        return res.status(400).json({
            success: false,
            message: `Invalid user`,
        });


    } else {
        return res.status(200).json({
            success: true,
            user,
        });
    }
});


//---------------------------------------------------delete user

export const deleteUser = TryCatch(async (req, res, next) => {

    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {

        return res.status(400).json({
            success: false,
            message: `User not be deleted / Invalid user`,
        });


    } else {
        await user.deleteOne();
        return res.status(200).json({
            success: true,
            message: `User deleted successfully`,
        });
    }
});

