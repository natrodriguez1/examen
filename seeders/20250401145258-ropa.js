'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('ropa',[{
    nombre: 'crop top',
    tipo: 'camiseta',
    talla: 'M',
    precio: 20.00,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nombre: 'falda',
    tipo: 'bottom',
    talla: 'S',
    precio: 35.00,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nombre: 'pantalón',
    tipo: 'bottom',
    talla: 'L',
    precio: 50.00,
    createdAt: new Date(),
    updatedAt: new Date()
   },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ropa', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
