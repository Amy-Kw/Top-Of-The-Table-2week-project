//DROP TABLES ARE BEING USED HERE, BEWARE!!! - droptable resets your database
const client = require('./client')

const dropTables = async () => {
    try {
        await client.query(`
        DROP TABLE users;
        DROP TABLE info;
        DROP TABLE rate;
        DROP TABLE list;
        `)
    } catch (error) {
        throw error
    }

}

//create the tables!  NOT NULL - MEANS REQUIRED FEILD, UNIQUE - MEANS ONLY 1 OF ITS KIND
const createTables = async () => {
    await client.query(`
        CREATE TABLE users (
            users_id SERIAL PRIMARY KEY,
            firstname varchar(30) NOT NULL,
            lastname varchar(30) NOT NULL,
            username varchar(30) UNIQUE NOT NULL,
            password varchar(30) NOT NULL
        );
        CREATE TABLE info (
            info_id SERIAL PRIMARY KEY,
            gametitle text NOT NULL,
            theme text NOT NULL,
            year INTEGER REFERNCE UNIQUE NOT NULL,
            expansions boo NOT NULL
        )
    `)
}