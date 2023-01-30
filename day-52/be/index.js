const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const fs = require("fs");

app.use(cors());
app.use(express.json());

//EDIT

app.edit("/users", (request, response) => {
  const body = request.body;
});

//DELETE
app.delete("/users", (request, response) => {
  const body = request.body;
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObjects = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }

        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    username: body.username,
    age: body.age,
  };

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    dataObject.push(newUser);
    console.log(dataObject);

    //fs writefile

    fs.writeFile(
      "./data/users.json",
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
