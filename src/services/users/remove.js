const { Users } = require('./../../../models');

module.exports = {
    byId: ({ id }) => Users.destroy({ where: { id } , force: true }),
    all: () => Users.destroy({ where: {}, force: true })
}
