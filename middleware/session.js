module.exports = {
    checkSession: function(req, res, next) {
        let session = req.session
        if (typeof session.email == 'undefined') {
            res.redirect('/login')
        }
        else {
            next()
        }
    }
}

