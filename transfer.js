import connection from "./config/bd.js";
import User from "./models/Models.js";
import Company from "./models/Company.js";

const transfer = async () => {
    try{
        const result = await connection.sync();
        console.log(result);
    }catch (error){
        console.log(error);
    }

};

transfer();