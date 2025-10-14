import { app } from "../app.js";
import { dbConfig } from "./dbconnect.js";
import "dotenv/config";

app.post("/create-account", async (c) => {
  try {
    const { companyName, email, password } = await c.req.json();

    const company =
      await dbConfig`INSERT INTO company_credentials (company_name, email, password)
        VALUES (${companyName}, ${email}, ${password})
        RETURNING *;`;

    if (company.length > 0) {
      return c.json(
        {
          success: true,
          message: "Account created successfully",
          data: company[0],
        },
        201
      );
    } else {
      return c.json(
        { success: false, message: "Account creation failed" },
        401
      );
    }
  } catch {}
});
