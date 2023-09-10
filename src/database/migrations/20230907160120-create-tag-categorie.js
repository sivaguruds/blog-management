'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tag_categories', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            postId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            categorieId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tag_categories')
    },
}
