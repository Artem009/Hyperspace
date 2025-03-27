const {Users} = require('../../../models');

const update = (id, { email, name, totalBalls, userGuess, userScore, youResult }) => {
    return Users.update({ email, name, totalBalls, userGuess, userScore, youResult },
        { where: { id }})
}

module.exports = { update }
