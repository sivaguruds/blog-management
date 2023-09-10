'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('posts', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            authorId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(128),
                allowNull: false,
            },
            metaTitle: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('posts')
    },
}
