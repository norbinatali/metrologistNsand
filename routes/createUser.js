var express = require('express');
var router = express.Router();


router.post('/registration', function(req, res, next) {
    res.locals.connection.query('insert into users(username, password, user_fullname, user_email, company_name, position_name) values ("+req.body.username+","+req.body.password+","+req.body.userfullname+","+req.body.user_email+","+req.body.company_name+","+req.body.position_name+")', function (error, results) {
        res.send(JSON.stringify(results));
    });
});
router.get('/registration', function(req, res, next) {
    res.locals.connection.query('insert into users(username, password, user_fullname, user_email, company_name, position_name) values ("+req.body.username+","+req.body.password+","+req.body.userfullname+","+req.body.user_email+","+req.body.company_name+","+req.body.position_name+")', function (error, results) {
        res.send(JSON.stringify(results));
    });
});
module.exports = router;
