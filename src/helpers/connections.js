const dbAuthenticate = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.info('Connection with database has been established successfully.');
    } catch (error) {
        console.error({ msg: 'Unable to connect to the database', error });
        process.exit(-1);
    }
};

module.exports = {
    dbAuthenticate
};
