let date_ob = new Date()
let current_year = date_ob.getFullYear()

module.exports = {
    profile: function(req, res, next){
        let user_email = req.session.email
        let items = { current_year, user_email }
        res.render('user/profile', { items })
    },

    login: function(req, res, next){
        var title = 'LOGIN ENS'
        let items = { title, current_year }
        res.render('login', { items })
    },

    logout: function(req, res, next){
        req.session.destroy(function (err) {
            if (err) {
                console.log(err)
                return next(err)
            }
            res.redirect('/admin/login')
        })
    }
}