//bsucando biblioteca
const Sequelize = require('sequelize');
//criando model
const sequelize = new Sequelize('numeros','root','root123',{
    host:'localhost',
    dialect:'mysql'
})
