const client = require('../client')

const createRate = async ({ recommended, setupcomplexities, lvlofdifficulties }) => {
    try {
        const {
            rows:[ratee],
        } = await client.query (
            `
            INSERT INTO users(recommended, setupcomplexities, lvlofdifficulties)
            VALUES($1, $2, $3)
            RETURNING *;
            `,
            [recommended, setupcomplexities, lvlofdifficulties]
        )
        return ratee
    } catch (error) {
        throw error
    }
}


const getRateById = async (rateId) => {
    try {
        const {
            rows: [ratee]
        } = await client.query(
            `
                SELECT *
                FROM rate
                WHERE "rate_id" =${rateId};
            `
        )
        return ratee
    } catch (error) {
        throw error
    }
}

module.exports = { createRate, getRateById }