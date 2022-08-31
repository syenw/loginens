let date_ob = new Date()
let current_year = date_ob.getFullYear()

module.exports = {
    index: function(req, res, next) {
        let user_email = req.session.email
        var title = 'LOGIN ENS | Dashboard'
        let items = {title, user_email, current_year}
        res.render('dashboard/index', {items})
    }
}