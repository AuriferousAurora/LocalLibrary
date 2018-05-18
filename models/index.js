var Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/stockClub');

const models = {
    author: sequelize.import('./author'),
    book: sequelize.import('./book'),
    bookInstance: sequelize.import('./bookInstance'),
    genre: sequelize.import('./genre')
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  module.exports = models;