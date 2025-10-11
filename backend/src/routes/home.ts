import { app } from "../app.js"

app.get('/', (c) => {
  return c.text('Hello Hono!')
})