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
            INSERT INTO list(played, wanttobuy, owned)
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

const getListById = async (listId) => {
    try {
        const {
            rows: [listt]
        } = await client.query(
            `
                SELECT *
                FROM list
                WHERE "list_id" =${listId};
            `
        )
        return listt
    } catch (error) {
        throw error
    }
}

module.exports = { createList, getListById }