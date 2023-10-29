import init_db from './utilities/initialize.js'
import express from 'express'
import accountRouter from './routes/account-routes.js'
import customerRouter from './routes/customer-routes.js'
import eventRouter from './routes/event-routes.js'
import registrationRouter from './routes/registration-routes.js'

init_db()

var app = express()
app.use(express.json())

app.use('/api/accounts', accountRouter)
app.use('/api/customers', customerRouter)
app.use('/api/events', eventRouter)
app.use('/api/registrations', registrationRouter)

app.listen('8000');

console.log('server started') 