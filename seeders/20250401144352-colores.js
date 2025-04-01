'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const colores = ['Rojo', 'Azul', 'Negro', 'Blanco', 'Verde', 'Amarillo', 'Gris', 'Naranja', 'Morado', 'Rosa', 'Marrón', 'Turquesa', 'Beige', 'Violeta', 'Celeste'];
    for(let color of colores){
      await queryInterface.bulkInsert('colores',[ {
        nombre: color,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colores', null, {});
  }
};
