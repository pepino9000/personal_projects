--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categorias; Type: TABLE; Schema: public; Owner: bastian
--

CREATE TABLE public.categorias (
    id_categorias integer NOT NULL,
    nombre character varying(25),
    descripcion character varying(50)
);

--
-- Name: categorias_id_categorias_seq; Type: SEQUENCE; Schema: public; Owner: bastian
--

CREATE SEQUENCE public.categorias_id_categorias_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categorias_id_categorias_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bastian
--

ALTER SEQUENCE public.categorias_id_categorias_seq OWNED BY public.categorias.id_categorias;


--
-- Name: entradas; Type: TABLE; Schema: public; Owner: bastian
--

CREATE TABLE public.entradas (
    id_entradas integer NOT NULL,
    cantidad integer,
    id_productos integer,
    fecha timestamp without time zone
);

--
-- Name: entradas_id_entradas_seq; Type: SEQUENCE; Schema: public; Owner: bastian
--

CREATE SEQUENCE public.entradas_id_entradas_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: entradas_id_entradas_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bastian
--

ALTER SEQUENCE public.entradas_id_entradas_seq OWNED BY public.entradas.id_entradas;


--
-- Name: productos; Type: TABLE; Schema: public; Owner: bastian
--

CREATE TABLE public.productos (
    id_productos integer NOT NULL,
    nombre character varying(25),
    precio integer,
    costo integer,
    descripcion character varying(100),
    codigo character varying(100),
    id_categorias integer
);


--
-- Name: productos_id_productos_seq; Type: SEQUENCE; Schema: public; Owner: bastian
--

CREATE SEQUENCE public.productos_id_productos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: productos_id_productos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bastian
--

ALTER SEQUENCE public.productos_id_productos_seq OWNED BY public.productos.id_productos;


--
-- Name: salidas; Type: TABLE; Schema: public; Owner: bastian
--

CREATE TABLE public.salidas (
    id_salidas integer NOT NULL,
    cantidad integer,
    id_productos integer,
    fecha timestamp without time zone
);



--
-- Name: salidas_id_salidas_seq; Type: SEQUENCE; Schema: public; Owner: bastian
--

CREATE SEQUENCE public.salidas_id_salidas_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;



--
-- Name: salidas_id_salidas_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bastian
--

ALTER SEQUENCE public.salidas_id_salidas_seq OWNED BY public.salidas.id_salidas;


--
-- Name: categorias id_categorias; Type: DEFAULT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id_categorias SET DEFAULT nextval('public.categorias_id_categorias_seq'::regclass);


--
-- Name: entradas id_entradas; Type: DEFAULT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.entradas ALTER COLUMN id_entradas SET DEFAULT nextval('public.entradas_id_entradas_seq'::regclass);


--
-- Name: productos id_productos; Type: DEFAULT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.productos ALTER COLUMN id_productos SET DEFAULT nextval('public.productos_id_productos_seq'::regclass);


--
-- Name: salidas id_salidas; Type: DEFAULT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.salidas ALTER COLUMN id_salidas SET DEFAULT nextval('public.salidas_id_salidas_seq'::regclass);


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: bastian
--

COPY public.categorias (id_categorias, nombre, descripcion) FROM stdin;
1	inform tica	Productos electr¢nicos
\.


--
-- Data for Name: entradas; Type: TABLE DATA; Schema: public; Owner: bastian
--

COPY public.entradas (id_entradas, cantidad, id_productos, fecha) FROM stdin;
1	5	1	2021-01-03 13:29:34.319363
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: bastian
--

COPY public.productos (id_productos, nombre, precio, costo, descripcion, codigo, id_categorias) FROM stdin;
1	Computador Dell	15000	2500	Un computador potente	12348-9	1
\.


--
-- Data for Name: salidas; Type: TABLE DATA; Schema: public; Owner: bastian
--

COPY public.salidas (id_salidas, cantidad, id_productos, fecha) FROM stdin;
1	2	1	2021-01-03 13:29:35.430809
\.


--
-- Name: categorias_id_categorias_seq; Type: SEQUENCE SET; Schema: public; Owner: bastian
--

SELECT pg_catalog.setval('public.categorias_id_categorias_seq', 1, true);


--
-- Name: entradas_id_entradas_seq; Type: SEQUENCE SET; Schema: public; Owner: bastian
--

SELECT pg_catalog.setval('public.entradas_id_entradas_seq', 1, true);


--
-- Name: productos_id_productos_seq; Type: SEQUENCE SET; Schema: public; Owner: bastian
--

SELECT pg_catalog.setval('public.productos_id_productos_seq', 5, true);


--
-- Name: salidas_id_salidas_seq; Type: SEQUENCE SET; Schema: public; Owner: bastian
--

SELECT pg_catalog.setval('public.salidas_id_salidas_seq', 1, true);


--
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categorias);


--
-- Name: entradas entradas_pkey; Type: CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_pkey PRIMARY KEY (id_entradas);


--
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id_productos);


--
-- Name: salidas salidas_pkey; Type: CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.salidas
    ADD CONSTRAINT salidas_pkey PRIMARY KEY (id_salidas);


--
-- Name: entradas entradas_id_productos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_id_productos_fkey FOREIGN KEY (id_productos) REFERENCES public.productos(id_productos);


--
-- Name: productos productos_id_categorias_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_id_categorias_fkey FOREIGN KEY (id_categorias) REFERENCES public.categorias(id_categorias);


--
-- Name: salidas salidas_id_productos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bastian
--

ALTER TABLE ONLY public.salidas
    ADD CONSTRAINT salidas_id_productos_fkey FOREIGN KEY (id_productos) REFERENCES public.productos(id_productos);


--
-- PostgreSQL database dump complete
--

