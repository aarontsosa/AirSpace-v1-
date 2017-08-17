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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
-- Name: client_host; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE client_host (
    client_id integer NOT NULL,
    host_id integer NOT NULL
);


--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE clients (
    client_id integer NOT NULL,
    client_name character varying(50) NOT NULL
);


--
-- Name: clients_client_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE clients_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clients_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE clients_client_id_seq OWNED BY clients.client_id;


--
=======
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
-- Name: host_survey; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE host_survey (
    host_unique_id character varying(10),
<<<<<<< HEAD
    survey_id integer NOT NULL
=======
-- Name: client_host; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE client_host (
    client_id integer NOT NULL,
    host_id integer NOT NULL
>>>>>>> aaron-ThursdayWorkday
);


--
<<<<<<< HEAD
=======
-- Name: host_survey; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE host_survey (
    host_unique_id character varying(10),
    survey_id character varying(20000)
);


--
>>>>>>> styles welcome page, host page, and begin styling survey page-- only problem is everything is kind of huge right now
=======
    survey_id character varying(20000)
=======
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE clients (
    client_id integer NOT NULL,
    client_name character varying(50) NOT NULL
);


--
-- Name: clients_client_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE clients_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clients_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE clients_client_id_seq OWNED BY clients.client_id;


--
-- Name: host_survey; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE host_survey (
    host_unique_id character varying(10),
    survey_id integer NOT NULL
>>>>>>> aaron-ThursdayWorkday
);


--
<<<<<<< HEAD
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
=======
>>>>>>> aaron-ThursdayWorkday
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    question_id integer NOT NULL,
    answer_id integer NOT NULL
=======
    question_id character varying(20000),
    answer_id character varying(20000)
>>>>>>> styles welcome page, host page, and begin styling survey page-- only problem is everything is kind of huge right now
=======
    question_id character varying(20000),
    answer_id character varying(20000)
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
=======
    question_id integer NOT NULL,
    answer_id integer NOT NULL
>>>>>>> aaron-ThursdayWorkday
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    question_id integer NOT NULL,
    survey_id integer NOT NULL
=======
    question_id character varying(20000),
    survey_id character varying(20000)
>>>>>>> styles welcome page, host page, and begin styling survey page-- only problem is everything is kind of huge right now
=======
    question_id character varying(20000),
    survey_id character varying(20000)
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
=======
    question_id integer NOT NULL,
    survey_id integer NOT NULL
>>>>>>> aaron-ThursdayWorkday
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aaron-ThursdayWorkday
-- Name: clients client_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY clients ALTER COLUMN client_id SET DEFAULT nextval('clients_client_id_seq'::regclass);


--
<<<<<<< HEAD
=======
>>>>>>> styles welcome page, host page, and begin styling survey page-- only problem is everything is kind of huge right now
=======
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
=======
>>>>>>> aaron-ThursdayWorkday
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
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY answers (answer_id, answer) FROM stdin;
\.


--
-- Name: answers_answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('answers_answer_id_seq', 1, false);


--
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aaron-ThursdayWorkday
-- Data for Name: client_host; Type: TABLE DATA; Schema: public; Owner: -
--

COPY client_host (client_id, host_id) FROM stdin;
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

COPY clients (client_id, client_name) FROM stdin;
\.


--
-- Name: clients_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('clients_client_id_seq', 1, false);


--
<<<<<<< HEAD
=======
>>>>>>> styles welcome page, host page, and begin styling survey page-- only problem is everything is kind of huge right now
=======
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
=======
>>>>>>> aaron-ThursdayWorkday
-- Data for Name: host_survey; Type: TABLE DATA; Schema: public; Owner: -
--

COPY host_survey (host_unique_id, survey_id) FROM stdin;
\.


--
-- Data for Name: hosts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY hosts (host_id, host_unique_id) FROM stdin;
\.


--
-- Name: hosts_host_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('hosts_host_id_seq', 1, false);


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY questions (question_id, question) FROM stdin;
\.


--
-- Data for Name: questions_answers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY questions_answers (question_id, answer_id) FROM stdin;
\.


--
-- Name: questions_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('questions_question_id_seq', 1, false);


--
-- Data for Name: scores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY scores (name, score) FROM stdin;
\.


--
-- Data for Name: survey_questions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY survey_questions (question_id, survey_id) FROM stdin;
\.


--
-- Data for Name: surveys; Type: TABLE DATA; Schema: public; Owner: -
--

COPY surveys (survey_id, survey_name) FROM stdin;
\.


--
-- Name: surveys_survey_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('surveys_survey_id_seq', 1, false);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (answer_id);


--
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aaron-ThursdayWorkday
-- Name: client_host client_host_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY client_host
    ADD CONSTRAINT client_host_pkey PRIMARY KEY (client_id);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (client_id);


--
<<<<<<< HEAD
=======
>>>>>>> styles welcome page, host page, and begin styling survey page-- only problem is everything is kind of huge right now
=======
>>>>>>> 4720df7f1405647c6cef56990a1485262eb73b23
=======
>>>>>>> aaron-ThursdayWorkday
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