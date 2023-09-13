const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/usersapi - //url path and then the econd is a file path - server to index.js file to api to index.js to whatever file(user or info) 
router.use('/users', require('./usersapi'));
///users - could be named anything
//./userapi is pulling in the file name of the api


// ROUTER: /api/infoapi
router.use('/info', require('./infoapi'));

//token router
// ROUTER: /api/auth <bc I name it to be that, the require is the name of the file
// router.use('/auth', require('./auth'))

module.exports = router;



//../one folder high dicrectory
//./ - within the same folder 