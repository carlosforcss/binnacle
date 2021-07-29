const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/app/db.sqlite'
});

(async () => {
    await sequelize.sync();
})();

module.exports = sequelize