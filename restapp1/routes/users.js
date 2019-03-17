var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/book', function (req, res, next) {

  console.log('YO Chris GET BOOK Called');
  var data = { 
    bookId: "My new Book",
    bookISBN: 383737292922,
    numPages: 322
  };

  res.json(data);
});

router.post('/addBook', function (req, res, next) {

  console.log('Add Book Called');
  console.log(req.body);

  res.send("Book Added");
});

module.exports = router;
