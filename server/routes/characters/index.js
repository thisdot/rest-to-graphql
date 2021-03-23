const characterRouter = require('express').Router();
const findAll = require('./findAll');
const findOne = require('./findOne');

characterRouter.get('/', findAll);
characterRouter.get('/:id', findOne);

module.exports = characterRouter;
