const { Users } = require('../../../models');

const create = ({ email, name, totalBalls, userGuess, userScore, youResult }) => {
    return Users.create({
        email,
        name,
        totalBalls: +totalBalls,
        userGuess: +userGuess,
        userScore: +userScore,
        youResult: +youResult,
    });
};

module.exports = { create };
