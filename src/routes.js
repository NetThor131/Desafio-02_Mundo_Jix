const express = require('express');
const LedController = require('./controllers/LedController');

const routes = express.Router();

routes.post('/', LedController.store);

routes.get('/', LedController.index);

module.exports = routes;