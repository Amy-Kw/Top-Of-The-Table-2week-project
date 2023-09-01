//this file is the connection to the client folder

const { Client } = require('pg')  //how to import but back-end way

const topofthetable = 'topofthetable' //I will call my db(database) topofthetable - naming of your db
const client = new Client(`postgres://localhost:5432/${topofthetable}`) //establishhing the connection to the database(topoofthetabe - I created a psql db)

module.exports = client