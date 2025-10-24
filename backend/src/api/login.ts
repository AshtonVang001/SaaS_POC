import { app } from "../app.js";
import { dbConfig } from "./dbconnect.js";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import "dotenv/config";

app.post("/login", async (c) => {
  try {
    const { companyName, email, password } = await c.req.json();

    const company = await dbConfig`SELECT * FROM "company_credentials"
        WHERE company_name = ${companyName} AND email = ${email} AND password = ${password}`;

    const payload = {
      companyName: companyName,
      email: email,
      exp: Math.floor(Date.now() / 1000) + 60 * 10,
    };

    const secret = process.env.SECRET;
    if (!secret) throw new Error("Missing SECRET environment variable");

    const token = await sign(payload, secret);

    console.log("Token created at login: ", token);

    if (company.length > 0) {
      setCookie(c, "loginToken", token, {
        httpOnly: true, //JS on the client cannot read the cookie
        secure: true, //cookie is only sent over http connections
        path: "/", //the path to where the cookie is sent to - this one means every domain
        maxAge: 60 * 60, //1 hour
      });
      return c.json(token);
    } else {
      return c.json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.error("Error logging in: ", error);
    return c.json({ success: false, message: "invalid credentials" });
  }
});
