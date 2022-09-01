import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import connection from '../config/db.js';

dotenv.config({path: './config/config.env'});

const Event = connection.define(
    'event',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING(1000),
            allowNull: false
        },
        dateTime: {
            type: Sequelize.DATETIME,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
);

export default Event;