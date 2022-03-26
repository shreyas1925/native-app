const express = require("express");
const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
    userid: {
        type: Number,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },

});
// Creating our collection
const UserData = new mongoose.model("Userdata", usersSchema);

module.exports = UserData;
