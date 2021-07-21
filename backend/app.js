const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const pdfcrowd = require("pdfcrowd");

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// create the API client instance
const client = new pdfcrowd.HtmlToPdfClient("namirabboud", "e206de76d3a089f723485382ad3dcdd0");


app.post('/export-pdf', (req, res) => {


  var callbacks = pdfcrowd.sendPdfInHttpResponse(res,"HelloWorld.pdf",'attachment');

  // set custom error callback
  callbacks.error = function(errMessage, statusCode) {
    if(statusCode) {
      console.error("Pdfcrowd Error: " + statusCode + " - " + errMessage);
    } else {
      console.error("Pdfcrowd Error: " + errMessage);
    }
  };

  client.convertUrl('http://3.129.128.9/resume', callbacks)
});


app.listen(5000, () => {
  console.log('Listening on port 5000!')
});
