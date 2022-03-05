const express = require("express");
const router = new express.Router();
const UserData = require("../models/userdata");

router.post("/userdata", async (req, res) => {
    try {
        const addingRecords = new UserData(req.body);

        console.log(req.body);

        const insertMensData = await addingRecords.save();
        res.status(201).send(insertMensData);

        // Because save returns us a promise
    } catch (e) {
        res.status(400).send(e);
    }
});

// Handling get request
router.get("/userdata", async (req, res) => {
    try {
        const getRecords = await UserData.find({});
        res.send(getRecords);

        // Because save returns us a promise
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
