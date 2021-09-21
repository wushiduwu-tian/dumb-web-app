const { application } = require('express');
var express = require('express');
const app = require('../app');
var router = express.Router();
var PORT = 3000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Hackers" });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
/* GET cursed page. */
router.get('/cursed', function(req, res, next) {
  res.render('cursed');
});
/* GET photos page. */
router.get('/photos', function(req, res, next) {
  res.render('photos');
});
/* GET cursed page. */
router.get('/comrade', function(req, res, next) {
  res.render('comrade');
});

const options = {
  url: 'http://localhost:3000/login',
  json: true,
  body: {
      username: 'username',
      password: 'password'
  }
};

router.post('/login', function(req, res, next) {
  if (req.body.username == 'username' && req.body.password == 'password'){
    req.session.userId = req.body.username;
    res.redirect("/cursed");
    console.log(req.session.userId);
  }
  else{
    res.send(400);
  }
  console.log(`Status: ${res.statusCode}`);

});

module.exports = router;