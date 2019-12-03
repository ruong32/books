const config = require('./../config/configMySQL');

const MySQL = config();

const insert = async item => {
  await MySQL.Book.create(item);
};

const find = async () => {
    const result = await MySQL.Book.findAll();
    return result;
};

module.exports = {
  insert: insert,
  find: find
};
