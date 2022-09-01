import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import connection from '../config/db.js';

dotenv.config({ path: './config/config.env' });

const User = connection.define(
    'user',
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
        admin: {
         type: Sequelize.BOOLEAN,
         allowNull: false
        },
        cpf: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        telefone: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

export default User;