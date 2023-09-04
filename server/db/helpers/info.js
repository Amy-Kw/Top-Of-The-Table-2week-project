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


const getInfoById = async (infoId) => {
    try {
        const {
            rows: [info]
        } = await client.query(
            `
                SELECT *
                FROM info
                WHERE "infoId" =${infoId};
            `
        )
        return info
    } catch (error) {
        throw error
    }
}

//deleting the info

async function deleteInfo(infoId) {
    try{
        const { rows: [info] } = await client.query(`
        DELETE FROM info
        WHERE id=$1
        RETURNING *;
        `, [infoId]);
        return info;
    } catch (error) {
        throw error;
    }
}

//put - update a info

async function updateInfo(infoId = {}) {

    if (setString.length === 0) {
        return;
    }

    try {
        const { rows: [info] } = await client.query(`
      UPDATE info
      SET ${setString}
      WHERE id=${infoId}
      RETURNING *;
    `, [infoId]);

        return info;
    } catch (error) {
        throw error;
    }
}


module.exports = { createInfo, getAllInfo, getInfoById, deleteInfo, updateInfo }



