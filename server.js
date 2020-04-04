const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data')

server.use(express.static('public'));
server.use(express.static('img'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
  autoescape: false
});

server.get('/', function(req, res) {
  return res.render('courses');
});

server.get('/about', function(req, res) {
  const about = {
    avatar_url: "/rocketseat.jpg",
    name: "Rocketseat",
    description: "Empresa de ensino em Tecnologia da Informação",
    technologies_title: "Principais tecnologias utilizadas:",
    technologies: [ 
      'HTML5', 'CSS3', 'EcmaScript 6', 'NodeJS', 'React', 'React Native'
    ],
    links: [
      { name: "GitHub", url: "https://github.com/Rocketseat" },
      { name: "Instagram", url: "https://instagram.com/rocketseat_oficial/" },
      { name: "Facebook", url: "https://facebook.com/rocketseat/" }
    ]
  }

  return res.render('about', { about });
});

server.get('/courses', function(req, res) {
  return res.render('courses', { items: courses });
});

server.use(function(req, res) {
  res.status(404).render('not-found');
});

server.listen(5000, function() {
  console.log('server in running');
});