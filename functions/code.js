const functions = require('firebase-functions');

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function () {

    console.log("Listening to Port " + port);
});

app.post('/nlb/results', (req, res) => {

    const url = "https://www.nlb.lk/English/results/" +  req.body.name + "/" + req.body.date;
    var data = [];
    axios.get(url)
        .then(response => {
            results = [];
            const $ = cheerio.load(response.data);
            $('div.BB ol.B li.Circle').each((i, elem) => {
                results.push($(elem).text());
                console.log(data)
            });

            data.push({name: $('div.pc form.RFORM select option:selected').text()})
            data.push({date: $('div.pc form.RFORM input.date').attr("value")})
            data.push({draw_no : $('div.lresult h1 big').text()})
            data.push({results: results});
            res.send(data);
            
        })
        .catch(err => {
            console.log(err);
        })
});

exports.app = functions.https.onRequest(app);
