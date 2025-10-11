import { app } from "../app.js";

app.post("/data", async (c) => {
  const {companyName, username, password} = await c.req.json();
  console.log("hello")
  // return c.text(companyName)
  try {
    const { companyName, username, password } = await c.req.json();
    console.log("Received user data:", companyName);

    // Perform database operations or other logic with userData

    return c.json(
      { message: "User created successfully", user: companyName },
      201
    );
  } catch (error) {
    console.error("Error processing user data:", error);
    return c.json({ message: "Failed to create user" }, 500);
  }
  // return c.text("hello")
});
