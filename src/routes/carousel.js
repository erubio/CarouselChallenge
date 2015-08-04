'use strict';

var express = require('express');
var carouselRouter = express.Router();
var carouselCtrl = require('../controllers/carouselController');

/* carousel route*/
carouselRouter.get('/', carouselCtrl.getCarouselInfo);


module.exports = carouselRouter;
