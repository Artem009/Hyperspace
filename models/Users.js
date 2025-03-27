module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "Users",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                field: 'id',
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
                field: 'email'
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                field: 'name'
            },
            totalBalls: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'totalBalls'
            },
            userGuess: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'userGuess'
            },
            userScore: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'userScore'
            },
            youResult: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'youResult'
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'created_at',
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'updated_at',
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'deleted_at',
            }
        },
        {
            "tableName": "users",
            "paranoid": true,
            "timestamps": true,
            "freezeTableName": true
        }
    );

    Users.associate = ({}) => {};

    return Users;
}
