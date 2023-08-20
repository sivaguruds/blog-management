'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    'users',
                    'isVerify',
                    {
                        type: Sequelize.BOOLEAN,
                        default: false,
                        allowNull: true,
                    },
                    { transaction: t },
                ),
            ])
        })
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([queryInterface.removeColumn('users', 'isVerify', { transaction: t })])
        })
    },
}
