'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [ropa, ropa_metadata] = await queryInterface.sequelize.query('SELECT id FROM ropa')
    let [colores, colores_metadata] = await queryInterface.sequelize.query('SELECT id FROM colores')
    console.log(colores[0].id)
    await queryInterface.bulkInsert('coloresxropa', [{
      colores_id: colores[0].id,
      ropa_id: ropa[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colores_id: colores[1].id,
      ropa_id: ropa[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colores_id: colores[2].id,
      ropa_id: ropa[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colores_id: colores[3].id,
      ropa_id: ropa[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colores_id: colores[4].id,
      ropa_id: ropa[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colores_id: colores[5].id,
      ropa_id: ropa[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('coloresxropa', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
