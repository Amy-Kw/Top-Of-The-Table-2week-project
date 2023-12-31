//DROP TABLES ARE BEING USED HERE, BEWARE!!! - droptable resets your database
const client = require('./client')

const { createUser, getAllUsers } = require('./helpers/users')
const { createRate, getRateById } = require('./helpers/rate') 
const { createList, getListById } = require('./helpers/list') 
const { createInfo, getAllInfo } = require('./helpers/info') //why this blue?

const { users, info, rate, list } = require('./seedData')

const dropTables = async () => {
    try {
        console.log("starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS info;
        DROP TABLE IF EXISTS rate;
        DROP TABLE IF EXISTS list;
        `)
        console.log("tables dropped")
    } catch (error) {
        console.log("drop tables error")
        throw error
    }

}

//create the tables!  NOT NULL - MEANS REQUIRED FEILD, UNIQUE - MEANS ONLY 1 OF ITS KIND
const createTables = async () => {
    console.log("building tables")
    await client.query(`
        CREATE TABLE users (
            users_id SERIAL PRIMARY KEY,
            firstname varchar(30) NOT NULL,
            lastname varchar(30) NOT NULL,
            username varchar(30) UNIQUE NOT NULL,
            password varchar(30) NOT NULL
        );
        CREATE TABLE rate (
            "rate_id" SERIAL PRIMARY KEY,
            recommended BOOLEAN,
            setupcomplexities INTEGER,
            lvlofdifficulties INTEGER
        );
        CREATE TABLE list (
            "list_id" SERIAL PRIMARY KEY,
            played BOOLEAN NOT NULL,
            wanttobuy BOOLEAN NOT NULL,
            owned BOOLEAN NOT NULL
        );
        CREATE TABLE info (
            info_id SERIAL PRIMARY KEY,
            gametitle TEXT NOT NULL,
            theme TEXT,
            year INTEGER,
            expansions BOOLEAN,
            ratelineid INTEGER REFERENCES rate("rate_id"),
            listlineid INTEGER REFERENCES list("list_id")
        );
    `)
    console.log("tables built")
}


//inserting the data from seedData.js
const createInitialUsers = async () => {
    try{
        //looping through ... array  from seedData
        for (const user of users) {
            //insert each users into the taable
            await createUser(user)
        }
        await getAllUsers()
        console.log("created users")
    } catch (error) {
        throw error
    }

}


const createInitialRate = async () => {
    try{
        //looping through ... array  from seedData
        for (const ratee of rate) {
            //insert each users into the taable
            await createRate(ratee) //do I need to do a specy: species moment thing?
        }
        // await getRateById()
        console.log("created rate")
    } catch (error) {
        throw error
    }

}



const createInitialList = async () => {
    try{
        //looping through ... array  from seedData
        for (const listt of list) {
            //insert each users into the taable
            await createList(listt)
        }
        // await getListById()
        console.log("created list")
    } catch (error) {
        throw error
    }

}


const createInitialInfo = async () => {
    try{
        //looping through ... array  from seedData
        for (const infomation of info) {
            //insert each users into the taable
            await createInfo(infomation) //comeback
        }
        // await getAllInfo()
        console.log("created info")
    } catch (error) {
        throw error
    }

}

//call function and "rebuild" (due to drop table) the database

const rebuildDb = async () => {
    try {
        // connect to the local db
         client.connect() 
         //run our funtion
         await dropTables()
         await createTables()


         //generating starting data
         console.log("starting to seed")
         await createInitialUsers();
         await createInitialRate();
         await createInitialList();
         await createInitialInfo();
         

    } catch (error) {
        throw error

        //finally runs reguarding what happens
    } finally {
        //close the connection
        client.end()
    }
}

rebuildDb()