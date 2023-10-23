const express = require('express')
const path = require('path')
// import express from 'express'
// import path from 'path'

const app = express()
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8000,()=>{console.log("Listening on port 8000")});