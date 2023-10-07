import mysql from "mysql"

export const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Navin@2004",
    database:"userdata"
})