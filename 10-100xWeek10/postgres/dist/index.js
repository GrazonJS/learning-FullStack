"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: ""
});
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
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const query = `SELECT * FROM users`;
    const result = yield client.query(query);
    console.log(result.rows[0].username);
    yield client.end();
});
getData();
