import type { MiddlewareHandler } from "hono";
import { app } from "../app.js";
import { getCookie } from "hono/cookie";
import { dbConfig } from "./dbconnect.js";
import { verify } from "hono/jwt";
import "dotenv/config";

export const dashboardAuth = (): MiddlewareHandler => {
  return async (c, next) => {
    const secret = process.env.SECRET!;
    const token = getCookie(c, "loginToken");

    if (!token) return c.text("Unauthorized", 401);

    try {
        const payload = await verify(token, secret);
        await next();
        return c.json({message: "verfied payload: ", payload}, 200)

        //if payload is valid give access to dashboard
    } catch(error) {
        return c.text(`Cannot access: ${error}`)
    }
  };
};

app.get("/dashboard", dashboardAuth());