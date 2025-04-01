var express = require('express');
var router = express.Router();

const {Sequelize, Op, INTEGER, STRING} = require('sequelize');
const Ropa = require('../models').ropa;
const Color = require('../models').color;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
  Ropa.findAll({
    attributes: {exclude:["updatedAt"]},
    include: [{
        model: Color,
        attributes: ['nombre'],
        through: {attributes: []}
        }],
})
.then(ropa => {
  // res.json(ropa);
  res.render('index', {title: 'Examen', arrRopa: ropa});
})
.catch(error =>res.status(400).send(error))
})

router.get('/findByPrice/view', function(req, res, next) {
  let lower = parseFloat(req.query.lower);
  let higher = parseFloat(req.query.higher);
  console.log(req.query.lower)

  Ropa.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
          model: Color,
          attributes: ['nombre'],
          through: {attributes: []}
          }],
      where: {
          precio:{
              [Op.between]: [lower, higher]
          }
      }
  })
  .then(ropa => {
      res.render('ropa-price', { title: 'Examen', arrRopa: ropa} );
  })
  .catch(error => res.status(400).send(error))
  
});

router.get('/findById/view', function(req, res, next) {
  let id = parseFloat(req.query.id) | 1;

  Ropa.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
          model: Color,
          attributes: ['nombre'],
          through: {attributes: []}
          }],
        where: {
            [Op.and]: [
                {id: id}
            ]
        }
  })
  .then(ropa => {
      res.render('ropa-id', { title: 'Examen', arrRopa: ropa} );
  })
  .catch(error => res.status(400).send(error))
  
});

router.get('/findById/:id/json', function(req, res, next) {
    let id = parseFloat(req.params.id);
  
    Ropa.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Color,
            attributes: ['nombre'],
            through: {attributes: []}
            }],
        where: {
            [Op.and]: [
                {id: id}
            ]
        }
    })
    .then(ropa => {
        res.json(ropa);
    })
    .catch(error => res.status(400).send(error))
    
  });
module.exports = router;
//980756