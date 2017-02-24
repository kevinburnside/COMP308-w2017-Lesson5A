let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//creating a game object-represents a document in the games collection
let game = require('../models/games');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home'
   });
});

/* GET about page. */
router.get('/gameslist', (req, res, next) => {
  // find all games in the games collection
  game.find((err, games) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/gamelist', {
        title: 'About',
        games: games
      });
    }

  });



});

/* GET products page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', {
    title: 'Projects'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});

module.exports = router;
