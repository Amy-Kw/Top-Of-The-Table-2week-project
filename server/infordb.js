const data = require("./seedData");

// GET - /api/infosapi - get all info
async function getAllInfo() {
  try {
    const rows = data.information;
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

// GET - /api/infoapi/:infoId - get info by id
async function getInfoById(infoId) {
    try{
        const rows = data.information;
        const info = rows.find(info => info.id === Number(infoId));
        return info;
    } catch (error) {
        throw error;
    }
}

// POST - /api/infoapi - create a new user
async function createInfo(body) {
    try {
      const info = body;
      const information = data.information;
      information.push(body);
      return info;
    } catch (error) {
      throw error;
    }
  }

  // PUT - /api/infoapi/:infoId - update a info
async function updateInfo(infoId, body) {
    try {
      const information = data.information;
      const info = information.find((info) => info.id === Number(infoId));
      const index = information.findIndex((info) => info.id === Number(infoId)); //(info = keeps getting surrounded  like (info) when I save, I know its (info....
      let newInfo = { ...info, ...body };
      info[index] = newInfo;
      return newInfo;
    } catch (error) {
      throw error;
    }
  }

// DELETE - /api/infoapi/:infoId - delete a info
async function deleteInfo(infoId) {
    try {
      const information = data.information;
      const info = information.find((info) => info.id === Number(infoId));
      const index = information.findIndex((info) => info.id === Number(infoId)); //(info = keeps getting surrounded  like (info) when I save, I know its (info....
      information.splice(index, 1);
      return info;
    } catch (error) {
      throw error;
    }
  }


  module.exports = {
    getAllInfo,
    getInfoById,
    createInfo,
    updateInfo,
    deleteInfo,
  };