console.log("day-55");

const express = require("express");

const app = express();

//server side render     dan backend deeer html bichij bolno
app.use(express.json());

app.use(express.static("public"));

const PORT = 8080;

const returnHTML = `
    <html>
        <head>
            <title>ExpressJS</title>
            <link href="/styles.css"  rel="stylesheet"/>
        </head>
        <body>
             <h1 style="text-align:center">Hello Express </h1>
             <button onclick="alertMe()">Click me</button>
             <script src="/script.js"></script>
        </body>
    </html>
`;

app.get(`/`, (request, response) => {
  response.send(returnHTML);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
