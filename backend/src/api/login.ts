import { app } from "../app.js"
import { dbConfig } from "./dbconnect.js";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import "dotenv/config"


app.post("/login", async(c) => {
    try{
        const {companyName, email, password} = await c.req.json();

        const company = await dbConfig
        `SELECT * FROM "company_credentials"
        WHERE company_name = ${companyName} AND email = ${email} AND password = ${password}`;

        const payload = {
            
        }



    }catch{

    }
})