const {Users, UserPhotos, Post} = require('../../../models');
const attributes = ['id', 'email', 'name', 'totalBalls', 'userGuess', 'userScore', 'youResult'];

/** Count use as check functionality */
const count = (userId) => Users.count({
    where: { userId }
});

module.exports = {
    count,
    one: {
        byObj: (where = {}) => Users.findOne({
            where,
            attributes
        })
    },
    all: {
        list: () => Users.findAll({ attributes })
    },
}
