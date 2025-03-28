const { Users } = require('../../../models');

const create = ({ email, name, totalBalls, userGuess, userScore, youResult }) => {
    return Users.create({
        email,
        name,
        totalBalls,
        userGuess,
        userScore,
        youResult,
    });
};

module.exports = { create };
