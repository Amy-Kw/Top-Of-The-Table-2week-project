const client = require('../client')

const createInfo = async ({ gametitle, theme, year, expansions, rateline_id, listline_id }) => {
    try {
        const {
            rows:[info],
        } = await client.query (
            `
            INSERT INTO info(gametitle, theme, year, expansions, rateline_id, listline_id)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
            `,
            [gametitle, theme, year, expansions, rateline_id, listline_id]
        )
        return info
    } catch (error) {
        throw error
    }
}

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
module.exports = { createInfo }