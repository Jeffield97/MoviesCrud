const sequelize = require('../utils/connection');
require("../models/Actor")
require("../models/Director")
require("../models/Genre")
require("../models/Movie")
const relations = require('../models')

const main = async() => {
    try{
        await sequelize.sync({ force: true, logging:false });
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();

/*
"test": "jest --detectOpenHandles",
"migrate:reset": "node ./src/tests/testMigrate.js",
"pretest": "npm run migrate:reset"
*/