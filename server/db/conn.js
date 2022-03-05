const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
    .connect(
        "mongodb+srv://<name>:<password>@cluster0.ireuw.mongodb.net/biodata?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log(chalk.greenBright.cyan("Database connection successful"));
    })
    .catch((e) => {
        console.log(`Connection failed due to ${e}`);
    });
