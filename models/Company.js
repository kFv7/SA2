import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import connection from '../config/bd.js';

dotenv.config({ path: './config/config.env' });

const Company = connection.define(
    'company',
    {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validadet: {
                isEmail: true
            },
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cnpj: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

export default Company;