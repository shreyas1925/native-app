const express = require("express");
const app = express();
const dbcon = require("../server/db/conn");
const router = require("../server/routers/userdataRoute");
const PORT = process.env.PORT || 3000;

// To get json to our express
app.use(express.json());
app.use(router);

app.get("/", () => { console.log("Heyy") })
app.listen(PORT, () => console.log(`App is working at port ${PORT}`))
