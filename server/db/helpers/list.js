const client = require('../client')

const createList = async ({ played, wanttobuy, owned }) => {
    try {
        const {
            rows:[listt],
            //insert sql query
            //insert into table(column1....)
            //value(variable1...)
            //returning everything

        } = await client.query (
            `
            INSERT INTO users(played, wanttobuy, owned)
            VALUES($1, $2, $3)
            RETURNING *;
            `,
            [played, wanttobuy, owned]
        )
        return listt
    } catch (error) {
        throw error
    }
}

module.exports = { createUser }