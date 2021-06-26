'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.addColumn('books', 'genreId', {
					type: Sequelize.DataTypes.INTEGER,
					references: {
					model: {
						tableName: 'genres',
					},
					key: 'id'
					},
					allowNull: false
				}, { transaction: t }),
				queryInterface.addColumn('books', 'authorId', {
					type: Sequelize.DataTypes.INTEGER,
					references: {
					model: {
						tableName: 'authors',
					},
					key: 'id'
					},
					allowNull: false
				}, { transaction: t }),
				queryInterface.removeColumn('books', 'author', { transaction: t }),
				queryInterface.removeColumn('books', 'genra', { transaction: t }),
			]);
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.removeColumn('books', 'genreId', { transaction: t }),
				queryInterface.addColumn('books', 'genra', {
					type: Sequelize.DataTypes.INTEGER,
				}, { transaction: t }),
				queryInterface.removeColumn('books', 'authorId', { transaction: t }),
				queryInterface.addColumn('books', 'author', {
					type: Sequelize.DataTypes.INTEGER,
				}, { transaction: t })
			]);
		});
	}
};
