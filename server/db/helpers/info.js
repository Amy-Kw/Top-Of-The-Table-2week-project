const client = require('../client')

const createInfo = async ({ gametitle, theme, year, expansions, rateline_id, listline_id }) => {
    try {
        const {
            rows:[infomation],
        } = await client.query (
            `
            INSERT INTO info(gametitle, theme, year, expansions, rateline_id, listline_id)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
            `,
            [gametitle, theme, year, expansions, rateline_id, listline_id]
        )
        console.log(infomation)
        return infomation
    } catch (error) {
        throw error
    }
}


module.exports = { createInfo }