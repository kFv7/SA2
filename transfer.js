import connection from "./config/db.js";
import User from "./models/User.js";
import Event from "./models/Event.js";
import Company from "./models/company.js";

const transfer = async () => {
    try{
        const result = await connection.sync();
        console.log(result);
    }catch (error){
        console.log(error);
    }

};

transfer();