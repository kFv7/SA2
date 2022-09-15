import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import connection from '../config/bd.js';

dotenv.config({ path: './config/config.env' });

const Models = connection.define(
    'models',
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
        cpf: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        telephone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cep: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        skinColor: {
            type : Sequelize.STRING,
            allowNull: false
        },
        eyeColor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hairType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        height: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Weight: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    }
);

export default Models;