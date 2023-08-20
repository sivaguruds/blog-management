'use strict'
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
        },
        firstName: {
            type: Sequelize.STRING(128),
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING(128),
            allowNull: false,
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dob: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
}
