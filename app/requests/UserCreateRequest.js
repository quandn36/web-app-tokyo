// trước khi validate thi require thư viện express-validator vào
module.exports.dataCreateUser = function(req, res, next) {
    var errors = [];
    if(!req.body.name) {
        errors.push('name is required');
    }
    if(!req.body.age) {
        errors.push('age is required');
    }
    if(!req.body.phone) {
        errors.push('phone is required');
    }
    if(errors.length > 0) {
        res.render('users/create', { errors: errors, values: req.body });
        return;
    }
    next();
}