import type { MiddlewareHandler } from "hono";
import { app } from "../app.js";
import { getCookie } from "hono/cookie";
import { dbConfig } from "./dbconnect.js";
import "dotenv/config"

export const dashboardAuth = ():MiddlewareHandler => {
    return async (c, next) => {
        const secret = process.env.SECRET;
        const token = getCookie(c, "loginToken");

        if(!token) return c.text("Unauthorized", 401);

        

    }
}