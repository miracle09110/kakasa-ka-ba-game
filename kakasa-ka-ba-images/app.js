const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors())


app.get("/gagamboy", (req,res) => {
  res.sendFile("C:\\Users\\jpabon003\\active-engagements\\repos\\kakasa-ka-ba-images\\images\\gagamboy.png");
});

app.get("/sineskwela", (req,res) => {
  res.sendFile("C:\\Users\\jpabon003\\active-engagements\\repos\\kakasa-ka-ba-images\\images\\sineskwela.png");
});

app.get("/nooda", (req,res) => {
  res.sendFile("C:\\Users\\jpabon003\\active-engagements\\repos\\kakasa-ka-ba-images\\images\\Nooda.jpg");
});


app.listen(2000, () => {
  console.log(`Running on port ${2000}`)
})