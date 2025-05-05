const express = require("express");
const app = express();

app.get("/queryType", (req, res) => {
  const input = req.query.n;
  res.send("input recieved");
});

var users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: "false",
      },
      {
        healthy: "true",
      },
      {
        healthy: "true",
      },
      {
        healthy: "true",
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberofKidneys = johnKidneys.length;
  const numberofHealthyKidneys = johnKidneys.filter((eachKidney) => {
    return eachKidney.healthy === "true";
  }).length;
  const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
  console.log(numberofUnhealthyKidneys.toString());

  res.json({
    numberofKidneys,
    numberofHealthyKidneys,
    numberofUnhealthyKidneys,
  });
});

app.use(express.json());

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: " done",
  });
});

app.put("/", (req, res) => {
  users[0].kidneys.map((kidney) => {
    kidney.healthy = "true";
  });
  res.json({
    msg: "updated",
  });
});

const isAtleastOneBadKidney = () => {
  let atleastOneBadKidney = false;
  users[0].kidneys.map((kidney) => {
    if (kidney.healthy === "false") {
      return (atleastOneBadKidney = true);
    }
  });
  return atleastOneBadKidney;
};

app.delete("/", (req, res) => {
  if (isAtleastOneBadKidney()) {
    console.log(isAtleastOneBadKidney());

    const newKidneys = users[0].kidneys.filter((kidney) => {
      return kidney.healthy === "true";
    });
    console.log(newKidneys);
    users[0].kidneys = newKidneys;
    res.json({
      msg: "deleted",
    });
  } else {
    res.status(411).json({
      msg: "you have no bad kidneys",
    });
  }
});

app.listen(3000);
