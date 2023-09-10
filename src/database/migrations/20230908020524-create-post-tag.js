'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('post_tags', {
            postId: {
                type: Sequelize.UUID,
            },
            categorieId: {
                type: Sequelize.UUID,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('post_tags')
    },
}
