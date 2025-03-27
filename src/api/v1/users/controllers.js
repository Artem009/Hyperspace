const userServices = require('../../../services/users');
const {NotFoundError} = require("../../../errors");


const createUser = async (req, res) => {
    const { email, name, totalBalls, userGuess, userScore, youResult } = req.body;
    const user = await userServices.create({ email, name, totalBalls, userGuess, userScore, youResult });
    res.status(200).json({ data: user });
}

const listUser = async (req, res) => {
    const users = await userServices.read.all.list();
    res.status(200).json({ data: users });
}

const deleteAllUser = async (req, res) => {
    await userServices.destroy.all();
    res.status(200).json({ data: 'USER DESTROY' });
}

const findOneUser = async (req, res) => {
    const { id } = req.params;
    const user = await userServices.read.one.byObj({id});
    if(!user) throw new NotFoundError({ message: "User not found!" });
    res.status(200).json({ data: user });
}

const updateUser = async (req, res) => {
    const { id } = req.params;

    const user = await userServices.read.one.byObj({id});
    if(!user) throw new NotFoundError({ message: "User not found!" });

    const { email, name, totalBalls, userGuess, userScore, youResult } = req.body;
    await userServices.update(id, { email, name, totalBalls, userGuess, userScore, youResult });
    const updatedUser = await userServices.read.one.byObj({id});
    res.status(200).json({ data: updatedUser });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await userServices.read.one.byObj({id});
    if(!user) throw new NotFoundError({ message: "User not found!" });

    await userServices.destroy.byId({ id });
    res.status(200).json({ data: 'USER DESTROY' });
}

module.exports = {
    createUser,
    listUser,
    deleteAllUser,
    findOneUser,
    updateUser,
    deleteUser,
}
