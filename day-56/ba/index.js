console.log("Day-56 - REST API");

//DAY 52 DEEER HIISEN ENIIG SERGEEJ OILGOMOOR BAIWAL DAY 52G UZEEREI TURU

const express = require("express");

const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {
  response.send("<h1>Expreess REST API is running </>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(timerData);

    response.json({
      status: `success`,
      data: timerData,
    });
  });
}); // slash timerData ghd be dr garna'

//DELETE

app.delete("/timers", (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    let savedData = JSON.parse(readData);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    const deletedData = savedData.filter((d) => d.id !== body.timerId);
    fs.writeFile(
      "./data/data.json",
      JSON.stringify(deletedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
            data: [],
          });
        }
        console.log(deletedData);
        response.json({
          status: "success",
          data: deletedData,
        });
      }
    );
  });
});

//CREATE
app.post("/timers", (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "read file error",
        data: [],
      });
    }
    //CREATE READFILE
    fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file does not exist",
          data: [],
        });
      }
      const dataObject = JSON.parse(readData);
      console.log(dataObject);
      dataObject.push(body);
      console.log(dataObject);

      fs.writeFile(
        "./data/data.json",
        JSON.stringify(dataObject),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "Error during file write",
              data: [],
            });
          }
          response.json({
            status: "success",
            data: dataObject,
          });
        }
      );
    });
  });
});

app.put;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
