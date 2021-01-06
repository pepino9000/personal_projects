const { Pool } = require("pg");
const pool = new Pool({
  user:"nyqttmpp",
  host:"suleiman.db.elephantsql.com",
  password:"bm8jxmz5liCwD6dmj5vJ-K5nsOGRwPMi",
  port:5432,
  database:"nyqttmpp",
});
//postgres://nyqttmpp:bm8jxmz5liCwD6dmj5vJ-K5nsOGRwPMi@suleiman.db.elephantsql.com:5432/nyqttmpp
// const pool = async config => {
//   const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

//   // Establish a connection to the database
//   return await mysql.createPool({
//     user: process.env.postgres, // e.g. 'my-db-user'
//     password: process.env.pepino, // e.g. 'my-db-password'
//     database: process.env.inventario, // e.g. 'my-database'
//     // If connecting via unix domain socket, specify the path
//     socketPath: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
//     // Specify additional properties here.
//     ...config,
//   });
// };
const insertar = async (datos) => {
  const consulta = {
    text:
      "INSERT INTO productos (nombre, precio, costo, descripcion, codigo, id_categorias) values($1, $2, $3, $4, $5, $6) RETURNING*",
    values: datos,
  };
  console.log(consulta);
  try {
    const result = await pool.query(consulta);
    return result;
  } catch (error) {
    // Paso 4
    console.log(error.code);
    return error;
  }
};
const consultar = async () => {
  // Paso 2
  try {
    const result = await pool.query("SELECT * FROM productos");
    console.log(result);
    return result;
  } catch (error) {
    // Paso 3
    console.log(error.code);
    return error;
  }
};
const editar = async (datos) => {
  // Paso 2
  console.log("reviso mis datos" + datos);
  const consulta = {
    text: `UPDATE productos SET
    nombre = $1, 
    precio = $2, 
    costo = $3, 
    descripcion = $4, 
    codigo = $5, 
    id_categorias = $6
    WHERE id_productos = $7`,
    values: datos,
  };
  // Paso 3
  try {
    const result = await pool.query(consulta);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// Paso 1
const eliminar = async (id) => {
  // Paso 2
  try {
    const result = await pool.query(
      `DELETE FROM productos WHERE id_productos = '${id}'`
    );
    return result;
  } catch (error) {
    console.log(error.code);
    return error;
  }
};
// entradas

const consultarEntradas = async () => {
  // Paso 2
  try {
    const id = await pool.query("select id_productos from productos;")
    const result = await pool.query(
      "SELECT  to_char(fecha, 'YYYY-MM-DD HH24:MI:SS')as fecha, nombre, cantidad, (select sum(cantidad) from entradas where id_productos = productos.id_productos) - (select sum(cantidad) from salidas where id_productos = productos.id_productos)as stock FROM entradas JOIN productos ON entradas.id_productos=productos.id_productos"
    );
    console.log(result);
    return result;
  } catch (error) {
    // Paso 3
    console.log(error.code);
    return error;
  }
};
module.exports = { insertar, consultar, editar, eliminar, consultarEntradas };
// , consultar, editar, eliminar
