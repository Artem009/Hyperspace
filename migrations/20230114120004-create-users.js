'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                field: 'id',
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                field: 'email'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'name'
            },
            totalBalls: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: 'totalBalls'
            },
            userGuess: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: 'userGuess'
            },
            userScore: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: 'userScore'
            },
            youResult: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: 'youResult'
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                field: 'created_at',
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                field: 'updated_at',
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
                field: 'deleted_at',
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
