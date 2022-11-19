//import dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

//create api endpoint
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

//export routes
module.exports = router;