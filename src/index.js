const app = require('./app')
const sequelize = require('./services/dbConnection')
const { config } = require('./config')

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}`)
})