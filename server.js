'use strict';

const express = require('express');
const body = require('body-parser');

const morgan = require('morgan');
const uuid = require('uuid/v4');
const app = express();


app.use(morgan('dev'));

app.use(body.json());


const users = {};

app.get('/rand', function(req, res) {
    setTimeout(() => {
        res.json({ '22': '22' });
    }, Math.random() * 2500 + 300);

});



const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});