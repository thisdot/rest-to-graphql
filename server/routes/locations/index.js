const locationRouter = require('express').Router();
const findAll = require('./findAll');
const findOne = require('./findOne');

locationRouter.get('/', findAll);
locationRouter.get('/:id', findOne);

module.exports = locationRouter;
