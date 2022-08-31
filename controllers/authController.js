const bcrypt = require('bcrypt')
const { User } = require('../models/')

module.exports = {
  login: async function(req, res, next) {
    try {
      const user = await User.findOne(
        { attributes: ['email', 'password'] },
        { where: { email: req.body.username } }
      )
      let user_json = user.toJSON()
      let password_compare = bcrypt.compareSync(req.body.password, user_json.password);
      if (password_compare) {
        let session = req.session
        session.email = req.body.email
        res.redirect('/dashboard/')
      }
      // console.log(user_json.password)
      // console.log(password_compare)
    } catch (error) {
      console.log(error)
    }
  },
  logout: function(req, res, next) {
    req.session.destroy(function(err){
      if (err) {
        console.log(err)
        return next(err)
      }
      res.redirect('/login')
    })
  }
}