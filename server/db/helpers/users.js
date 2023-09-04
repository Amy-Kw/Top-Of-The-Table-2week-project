const client = require('../client')

//create user
const createUser = async ({ firstname, lastname, username, password }) => {
    try {
        const {
            rows:[user],
            //insert sql query
            //insert into table(column1....)
            //value(variable1...)
            //returning everything

        } = await client.query (
            `
            INSERT INTO users(firstname, lastname, username, password)
            VALUES($1, $2, $3, $4)
            RETURNING *;
            `,
            //hooking up the parameters to the $variables
            [firstname, lastname, username, password]
        )
        return user
    } catch (error) {
        throw error
    }
}

//get all user
const getAllUsers = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM users;
        `)
        console.log(rows)
        return rows
    } catch (error) {
        throw error
    }
}


module.exports = { createUser, getAllUsers }