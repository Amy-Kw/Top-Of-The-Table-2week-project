//DROP TABLES ARE BEING USED HERE, BEWARE!!! - droptable resets your database
const client = require('./client')

const dropTables = async () => {
    try {
        await client.query(`
        DROP TABLE user;
        DROP TABLE info;
        DROP TABLE rate;
        DROP TABLE list;
        `)
    } catch (error) {
        throw error
    }

}

//create the tables!
const createTables = async () => {
    await client.query(`

    `)
}