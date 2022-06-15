var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    name:"devano",
    age:12
  })


});

router.get("/:number",function(req, res, next) {
  console.log(req.params);
})

module.exports = router;
