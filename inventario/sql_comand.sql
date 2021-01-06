CREATE DATABASE inventario;
-- \c inventario;
CREATE TABLE categorias(
  id_categorias SERIAL PRIMARY KEY,
  nombre VARCHAR(25),
  descripcion VARCHAR(50)
);
CREATE TABLE productos(
  id_productos SERIAL PRIMARY KEY,
  nombre VARCHAR(25),
  precio INT,
  costo INT,
  descripcion VARCHAR(100),
  codigo VARCHAR(100),
  id_categorias INT,
  FOREIGN KEY (id_categorias) REFERENCES
  categorias(id_categorias)
);
CREATE TABLE entradas(
  id_entradas SERIAL PRIMARY KEY,
  cantidad INT,
  id_productos INT,
  fecha TIMESTAMP,
  FOREIGN KEY (id_productos) REFERENCES
  productos(id_productos)
);
CREATE TABLE salidas(
  id_salidas SERIAL PRIMARY KEY,
  cantidad INT,
  id_productos INT,
  fecha TIMESTAMP ,
  FOREIGN KEY (id_productos) REFERENCES
  productos(id_productos)
);

INSERT INTO categorias
(nombre, descripcion)
VALUES ('informática', 'Productos electrónicos');

INSERT INTO productos
(nombre, precio, costo, descripcion, id_categorias, codigo)
VALUES ('Computador Dell', 15000, 2500, 'Un computador potente', 1, '1234-5');

INSERT INTO entradas
(cantidad, id_productos, fecha)
VALUES (5, '1', LOCALTIMESTAMP 	);

INSERT INTO salidas
(cantidad, id_productos, fecha)
VALUES (2, '1', LOCALTIMESTAMP 	);



INSERT INTO entradas
(cantidad, id_productos, fecha)
VALUES (2, '5', current_time	);

INSERT INTO salidas
(cantidad, id_productos, fecha)
VALUES (1, '5', current_time	);

SELECT con el mismo id de la fila
SELECT fecha, nombre, cantidad, (select sum(cantidad) from entradas where id_productos = productos.id_productos) - (select sum(cantidad) from salidas where id_productos = productos.id_productos)as stock FROM entradas JOIN productos ON entradas.id_productos=productos.id_productos

select convert(fecha, '23/07/2009', 103) from entradas;