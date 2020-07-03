const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./utils");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/mock", (req, res) => {
  try {
    const data = [];
    const queryData = JSON.parse(req.query.data);

    for (let i = 0; i < queryData.count; i++) {
      let record = {};
      Object.getOwnPropertyNames(queryData.fields).forEach((field) => {
        const val = utils.stringDotNotationToFaker(queryData.fields[field]);
        record = { ...record, ...{ [field]: val } };
      });

      data.push(record);
    }

    res.status(200).json(data);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Something weird happened. Check your JSON!" });
  }
});

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}...`);
});
