// const data = require("./seedData");

// GET - /api/usersapi - get all user
// async function getAllUsers() {
//   try {
//     const rows = data.users;
//     console.log(rows);
//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

// // GET - /api/usersapi/:userId - get user by id
// async function getUsersById(usersId) {
//     try{
//         const rows = data.users;
//         const user = rows.find(info => user.id === Number(userId));
//         return user;
//     } catch (error) {
//         throw error;
//     }
// }


// // POST - /api/usersapi - create a new user
// async function createUser(body) {
//     try {
//       const user = body;
//       const users = data.users;
//       users.push(body);
//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // PUT - /api/usersapi/:userId - update a user
// async function updateUser(userId, body) {
//     try {
//       const users = data.users;
//       const user = users.find((user) => user.id === Number(userId));
//       const index = users.findIndex((user) => user.id === Number(userId)); //(user = keeps getting surrounded  like (user) when I save, I know its (user....
//       let newUser = { ...user, ...body };
//       user[index] = newUser;
//       return newUser;
//     } catch (error) {
//       throw error;
//     }
//   }

// // DELETE - /api/usersapi/:userId - delete a user
// async function deleteUser(userId) {
//     try {
//       const users = data.users;
//       const user = users.find((user) => user.id === Number(userId));
//       const index = users.findIndex((user) => user.id === Number(userId)); //(user = keeps getting surrounded  like (user) when I save, I know its (user....
//       users.splice(index, 1);
//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }


//   module.exports = {
//     getAllUsers,
//     getUsersById,
//     createUser,
//     // updateUser,
//     // deleteUser,
//   };