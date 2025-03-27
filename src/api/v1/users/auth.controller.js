const {NotFoundError, BadRequestError, UnauthorizedError} = require("../../../errors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authUser = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password)
        throw new BadRequestError({ message: "Fields email and password are required for authorisation!" });

    const { userData } = req.state;
    if(!userData)
        throw new NotFoundError({ message: "No such user!" });

    if(!bcrypt.compareSync(password, userData.password))
        throw new UnauthorizedError({ msg: "Incorrect email or password" });

    const tokenPayLoad = {
        userId: userData.userId,
    };

    const { userId, fullName, role, phoneNumber } = userData;

    const accessToken = await jwt.sign(
        tokenPayLoad,
        process.env.JWT_KEY,
        {expiresIn: process.env.ACCESS_TOKEN_EXP}
    );

    res.status(200).json({ msg: "Authorized", accessToken, user: { userId, fullName, role, email, phoneNumber } });
}


module.exports = {
    authUser
}
