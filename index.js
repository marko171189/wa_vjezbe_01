const express = require("express");
const app = express();

const PORT = 3000;

const korisnici = [
  { id: 1, ime: "Marko", prezime: "Marković" },
  { id: 2, ime: "Ivan", prezime: "Ivić" },
  { id: 3, ime: "Ana", prezime: "Anić" },
  { id: 4, ime: "Ante", prezime: "Antić" },
  { id: 5, ime: "John", prezime: "Doe" },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/users", (req, res) => {
  res.json(korisnici);
});

app.listen(PORT, () => {
  console.log(`Server je pokrenut na http://localhost:${PORT}`);
});
