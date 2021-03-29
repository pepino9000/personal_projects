const http = require("http");
const fs = require("fs");
const { randomNumber } = require("./consultas");

http
  .createServer(function (req, res) {
    function createData() {
      let usuariosJSON = JSON.parse(fs.readFileSync("datos.json", "utf8"));
      for (let i = 0; i < 500; i++) {
        usuariosJSON.datos1.push(randomNumber(35, 30));
        usuariosJSON.datos2.push(randomNumber(35, 30));
        usuariosJSON.datos3.push(randomNumber(35, 30));
        usuariosJSON.datos4.push(randomNumber(35, 30));
        usuariosJSON.datos5.push(randomNumber(35, 30));
        usuariosJSON.datos6.push(randomNumber(35, 30));
        usuariosJSON.datos7.push(randomNumber(35, 30));
        usuariosJSON.datos8.push(randomNumber(35, 30));
        usuariosJSON.datos9.push(randomNumber(35, 30));
        usuariosJSON.datos10.push(randomNumber(35, 30));
      }
      fs.writeFileSync("datos.json", JSON.stringify(usuariosJSON));
    }
    // createData();
    // console.log(usuariosJSON);
    if (req.url == "/" && req.method === "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("index.html", "utf8");
      res.end(html);
    }
    if (req.url == "/datos" && req.method === "GET") {
      let usuariosJSON = JSON.parse(fs.readFileSync("datos.json", "utf8"));
      console.log(usuariosJSON);
      res.end(JSON.stringify(usuariosJSON));
    }
    // if (req.url == "/datos1" && req.method == "POST") {
    //   let body = "";
    //   req.on("data", (chunk) => {
    //     body += chunk;
    //   });
    //   req.on("end", async () => {
    //     // Paso 2
    //     const datos = body;
    //     // Paso 3
    //     console.log(datos);
    //     // let usuariosJSON = JSON.parse(fs.readFileSync("datos.json", "utf8"));
    //   for (let i = 0; i < 100 - datos; i++) {
    //  usuariosJSON.datos1.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos2.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos3.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos4.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos5.push({ number: randomNumber(35, 30) });
    //  usuariosJSON.datos6.push({ number: randomNumber(35, 30) });
    //  usuariosJSON.datos7.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos8.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos9.push({ number: randomNumber(35, 30) });
    //   usuariosJSON.datos10.push({ number: randomNumber(35, 30) });
    //   }
    //     // console.log(usuariosJSON);
    // fs.writeFileSync("datos.json", JSON.stringify(usuariosJSON));
    //     res.end();
    //   });
    // }
    if (req.url == "/datos1" && req.method == "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", async () => {
        // console.log(usuariosJSON);
        // Paso 2
        const number = body;
        console.log(number);
        // Paso 3
        let usuariosJSON2 = JSON.parse(fs.readFileSync("datos.json", "utf8"));
        usuariosJSON2.datos1.push(randomNumber(35, 30));
        usuariosJSON2.datos2.push(randomNumber(40, 30));
        usuariosJSON2.datos3.push(randomNumber(25, 20));
        usuariosJSON2.datos4.push(randomNumber(15, 10));
        usuariosJSON2.datos5.push(randomNumber(28, 23));
        usuariosJSON2.datos6.push(randomNumber(15, 5));
        usuariosJSON2.datos7.push(randomNumber(50, 30));
        usuariosJSON2.datos8.push(randomNumber(40, 23));
        usuariosJSON2.datos9.push(randomNumber(23, 12));
        usuariosJSON2.datos10.push(randomNumber(24, 12));

        console.log(parseInt(number));
        fs.writeFileSync("datos.json", JSON.stringify(usuariosJSON2));

        //JSON.stringify(usuariosJSON2[number])
        res.end("listo");
      });
    }
  })
  .listen(3000);

//   const express = require("express");
// const datos = require("./data.json");
// const app = express();
// app.listen(3000, () => console.log("Servidor encendido!"));

// app.use(express.static("public"));
// app.get("/", async (req, res) => {
//   console.log(datos);
//   res.send(datos);
// });
