'use strict';

const { QueryError } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('coloresxropa', {
      fields: ['colores_id'],
      name: 'colores_id_fk',
      type: 'foreign key',
      references: {
        table: 'colores',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null',
    });
    await queryInterface.addConstraint('coloresxropa', {
      fields: ['ropa_id'],
      name: 'ropa_id_fk',
      type: 'foreign key',
      references: {
        table: 'ropa',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null',
    });
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('coloresxropa', 'colores_id_fk');
    await queryInterface.removeConstraint('coloresxropa','ropa_id_fk');
  }
};
