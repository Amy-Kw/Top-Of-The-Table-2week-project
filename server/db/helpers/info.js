const client = require('../client')

const createInfo = async ({ gametitle, theme, year, expansions, ratelineid, listlineid }) => {
    try {
        const {
            rows:[infomation],
        } = await client.query (
            `
            INSERT INTO info(gametitle, theme, year, expansions, ratelineid, listlineid) 
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
            `,
            [gametitle, theme, year, expansions, ratelineid, listlineid]
        )
        console.log(infomation)
        return infomation
    } catch (error) {
        throw error
    }
}

const getAllInfo = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM info;
        `)
        console.log(rows)
        return rows
    } catch (error) {
        throw error
    }
}


module.exports = { createInfo, getAllInfo }