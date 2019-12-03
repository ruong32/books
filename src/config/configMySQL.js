const DataTypes = require('sequelize');

const sequelize = new DataTypes('a17020996', 'root', '', {
  dialect: 'mysql',
  logging: false
});

const Book = require('./../models/book')(sequelize, DataTypes);

const config = () => {
  sequelize
    .sync()
    .then(() => {
      console.log('sync success', new Date());
    })
    .catch(err => {
      console.log('sync err', err);
    });
  return { Book };
};

module.exports = config;
