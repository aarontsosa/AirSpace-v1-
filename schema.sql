--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE clients (
    client_id integer NOT NULL,
    client_name character varying(50) NOT NULL
);


--
-- Name: Clients_client_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Clients_client_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Clients_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Clients_client_id_seq" OWNED BY clients.client_id;


--
-- Name: answers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE answers (
    answer_id integer NOT NULL,
    answer character varying(10000) NOT NULL
);


--
-- Name: answers_answer_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE answers_answer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: answers_answer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE answers_answer_id_seq OWNED BY answers.answer_id;


--
-- Name: client_host; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE client_host (
    client_id integer NOT NULL,
    host_id integer Not Null
);


--
-- Name: host_survey; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE host_survey (
    host_id integer NOT NULL,
    survey_id integer NOT NULL
);


--
-- Name: hosts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE hosts (
    host_id integer NOT NULL,
    host_unique_id character varying(10) NOT NULL
);


--
-- Name: hosts_host_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE hosts_host_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hosts_host_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE hosts_host_id_seq OWNED BY hosts.host_id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE questions (
    question_id integer NOT NULL,
    question character varying(200)
);


--
-- Name: questions_answers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE questions_answers (
    question_id integer NOT NULL,
    answer_id integer NOT NULL
);


--
-- Name: questions_question_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE questions_question_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: questions_question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE questions_question_id_seq OWNED BY questions.question_id;


--
-- Name: scores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE scores (
    name character varying(30) NOT NULL,
    score integer NOT NULL
);


--
-- Name: survey_questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE survey_questions (
    question_id integer NOT NULL,
    survey_id integer NOT NULL
);


--
-- Name: surveys; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE surveys (
    survey_id integer NOT NULL,
    survey_name character varying(10000) NOT NULL
);


--
-- Name: surveys_survey_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE surveys_survey_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: surveys_survey_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE surveys_survey_id_seq OWNED BY surveys.survey_id;


--
-- Name: answers answer_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY answers ALTER COLUMN answer_id SET DEFAULT nextval('answers_answer_id_seq'::regclass);


--
-- Name: clients client_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY clients ALTER COLUMN client_id SET DEFAULT nextval('"Clients_client_id_seq"'::regclass);


--
-- Name: hosts host_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY hosts ALTER COLUMN host_id SET DEFAULT nextval('hosts_host_id_seq'::regclass);


--
-- Name: questions question_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY questions ALTER COLUMN question_id SET DEFAULT nextval('questions_question_id_seq'::regclass);


--
-- Name: surveys survey_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY surveys ALTER COLUMN survey_id SET DEFAULT nextval('surveys_survey_id_seq'::regclass);


--
-- Name: Clients_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Clients_client_id_seq"', 39, true);


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: -
--




--
-- Name: answers_answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('answers_answer_id_seq', 11, true);


--
-- Data for Name: client_host; Type: TABLE DATA; Schema: public; Owner: -
--




--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--


--
-- Data for Name: host_survey; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: hosts; Type: TABLE DATA; Schema: public; Owner: -
--




--
-- Name: hosts_host_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('hosts_host_id_seq', 20, true);


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: -
--




--
-- Data for Name: questions_answers; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: questions_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('questions_question_id_seq', 12, true);


--
-- Name: surveys_survey_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('surveys_survey_id_seq', 22, true);


--
-- Name: clients Clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY clients
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY (client_id);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (answer_id);


--
-- Name: client_host client_host_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY client_host
    ADD CONSTRAINT client_host_pkey PRIMARY KEY (client_id);


--
-- Name: hosts hosts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY hosts
    ADD CONSTRAINT hosts_pkey PRIMARY KEY (host_id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (question_id);


--
-- Name: surveys surveys_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY surveys
    ADD CONSTRAINT surveys_pkey PRIMARY KEY (survey_id);


--
-- PostgreSQL database dump complete
--
