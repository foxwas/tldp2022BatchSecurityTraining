import Customer from '../models/customer.js'


const accountController = {

  login: function(req, res) {
    Customer.findOne(
      {CUSTOMER_NAME: req.body.username, PASSWORD: req.body.password}, 
      '', 
      function(err, customer){
        if(err || !customer) {
          res.sendStatus(401) // Unauthorized
        } else {
          res.sendStatus(200) // OK
        }
      }
    )
  },

  register: function(req, res) {
    Customer.create({ 
      CUSTOMER_NAME: req.body.name, 
      PASSWORD: req.body.password,
      EMAIL: req.body.email
    }).then(
      () => res.sendStatus(201), // OK
      () => res.sendStatus(500) // OK
    )
  }

}

export default accountController