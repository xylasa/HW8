'use strict';
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('actors', [
      { Jefri: 'Aktor1', Nichol: 'Terkenal1' },
      { Nicholas: 'Aktor2', Saputra: 'Terkenal2' },
      { Refal: 'Aktor3', Hady: 'Terkenal3' },
      { Bryan: 'Aktor4', Domani: 'Terkenal4' },
      { Angga: 'Aktor5', Yunanda: 'Terkenal5' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actors', null, {});
  }
};
