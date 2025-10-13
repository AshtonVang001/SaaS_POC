import { app } from "../app.js";
console.log("POST /data route loaded");


// app.post("/data", async (c) => {
//   // const {companyName, username, password} = await c.req.json();
//   // return c.text(companyName)
//   try {
//     const { companyName, username, password } = await c.req.json();
//     console.log("Received user data:", companyName);

//     // Perform database operations or other logic with userData

//     return c.json(
//       { message: "User created successfully", user: companyName },
//       201
//     );
//   } catch (error) {
//     console.error("Error processing user data:", error);
//     return c.json({ message: "Failed to create user" }, 500);
//   }
//   // return c.text("hello")
// });

app.post('/data', async (c) => {
  try {
    const body = await c.req.json();

    console.log('Received data from frontend:', body);

    return c.json({
      success: true,
      message: `Account created for ${body.inputCompany}`,
    });
  } catch (error) {
    console.error('Error reading POST body:', error);
    return c.json({ success: false, message: 'Invalid request' }, 400);
  }
});





