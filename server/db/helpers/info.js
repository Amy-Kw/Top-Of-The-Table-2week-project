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

//updated the $info
const getInfoById = async (info_id) => {
    try {
        const {
            rows: [info]
        } = await client.query(
            `
                SELECT *
                FROM info
                WHERE info_id =${info_id};
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
        WHERE info_id=$1
        RETURNING *;
        `, [infoId]);
        return info;
    } catch (error) {
        throw error;
    }
}

//put - update a info
//UPDATE info  SET column1 = value1, column2 = value2  WHERE condition
async function updateInfo(infoId, body) {

    // if (setString.length === 0) {
    //     return;
    // }
   console.log(infoId)
    try {
        const { rows: [info] } = await client.query(`
      UPDATE info
      SET gametitle = $1, theme = $2, year = $3, expansions = $4
      WHERE info_id=${infoId}
      RETURNING *;
    `, [body.gametitle, body.theme, body.year, body.expansions]);
    

        return info;
    } catch (error) {
        throw error;
    }
}


module.exports = { createInfo, getAllInfo, getInfoById, deleteInfo, updateInfo }



//the problem was that in line 83 - there was an extra body.title bc I did a copy and paste! - so counting 4 is 4 not 5