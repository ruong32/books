const express = require('express');
const path = require('path');

const controller = require('./../controllers/controllers');

const router = express.Router();

const initRoutes = app => {
  router.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
  });
  router.post('/create-book', controller.insert);
  router.post('/books', controller.find);
  return app.use('/', router);
};

module.exports = initRoutes;
