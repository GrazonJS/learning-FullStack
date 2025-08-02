import {Client} from "pg"

const client = new Client({
    connectionString : ""
})

// const createUsersTable = async()=> {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE  IF NOT EXISTS  users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(225) UNIQUE NOT NULL,
//             email VARCHAR(225) UNIQUE NOT NULL,
//             password VARCHAR(225) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )
//     `)
//     await client.end()
//     console.log(result);
        
// }
// createUsersTable()
 
// const putUsersData = async () => {
//     await client.connect()
//     const query = `INSERT INTO users(username,email, password) VALUES ($1,$2,$3)`
//     const values = ["grazon","grazon@gmail.com","uohdfvosidj"]
//     const res = await client.query(query,values)
//     await client.end()
//     console.log(res);
// }
// putUsersData()

const getData = async ()  => {
    await client.connect()
    const query = `SELECT * FROM users`
    const result = await client.query(query)
    console.log(result.rows[0].username);
    await client.end()   
}
getData()