const http = require("http");
var url = require("url");
const fs = require("fs");
const { insertar } = require("./consultas");
const { consultar } = require("./consultas");
const { editar } = require("./consultas");
const { eliminar } = require("./consultas");
const { consultarEntradas } = require("./consultas");
const PORT = process.env.PORT || 5000;

http
  .createServer(async (req, res) => {
    if (req.url == "/" && req.method === "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("index.html", "utf8");
      res.end(html);
    }
    if (req.url == "/ver_productos" && req.method === "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("ver_productos.html", "utf8");
      res.end(html);
    }
    if (req.url == "/entradas" && req.method === "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("entradas.html", "utf8");
      res.end(html);
    }
    if (req.url == "/entradas_agregar" && req.method === "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("agregar_entradas.html", "utf8");
      res.end(html);
    }
    if (req.url == "/entradas_ver" && req.method === "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("ver_entradas.html", "utf8");
      res.end(html);
    }
    // Paso 1
    if (req.url == "/productos" && req.method === "GET") {
      // Paso 2
      const registros = await consultar();
      // Paso 3
      res.end(JSON.stringify(registros));
    }
    if (req.url == "/lista_entradas" && req.method === "GET") {
      // Paso 2
      const registros = await consultarEntradas();
      // Paso 3
      res.end(JSON.stringify(registros));
    }
    if (req.url == "/producto" && req.method == "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", async () => {
        // Paso 2
        const datos = Object.values(JSON.parse(body));
        // Paso 3
        console.log(datos);
        const respuesta = await insertar(datos);
        // Paso 4
        res.end(JSON.stringify(respuesta));
      });
    }
    if (req.url == "/producto" && req.method == "PUT") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", async () => {
        const datos = Object.values(JSON.parse(body));
        // Paso 2
        const respuesta = await editar(datos);
        console.log("Datos editables " + respuesta);
        res.end(JSON.stringify(respuesta));
      });
    }
    // // Paso 2
    if (req.url.startsWith("/producto?id=") && req.method == "DELETE") {
      const { id } = url.parse(req.url, true).query;
      console.log(id);
      await eliminar(id);
      res.statusCode = 200;
      res.end("Registro eliminado con éxito!");
    }
  })
  .listen(PORT);
