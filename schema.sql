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
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: answers; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE answers (
    answer_id integer NOT NULL,
    answer character varying(10000) NOT NULL
);


ALTER TABLE answers OWNER TO timbrady;

--
-- Name: answers_answer_id_seq; Type: SEQUENCE; Schema: public; Owner: timbrady
--

CREATE SEQUENCE answers_answer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE answers_answer_id_seq OWNER TO timbrady;

--
-- Name: answers_answer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: timbrady
--

ALTER SEQUENCE answers_answer_id_seq OWNED BY answers.answer_id;


--
-- Name: host_survey; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE host_survey (
    host_id integer not null,
    survey_id integer not null
);


ALTER TABLE host_survey OWNER TO timbrady;

--
-- Name: hosts; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE hosts (
    host_id integer NOT NULL,
    host_unique_id character varying(10) NOT NULL
);


ALTER TABLE hosts OWNER TO timbrady;

--
-- Name: hosts_host_id_seq; Type: SEQUENCE; Schema: public; Owner: timbrady
--

CREATE SEQUENCE hosts_host_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hosts_host_id_seq OWNER TO timbrady;

--
-- Name: hosts_host_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: timbrady
--

ALTER SEQUENCE hosts_host_id_seq OWNED BY hosts.host_id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE questions (
    question_id integer NOT NULL,
    question character varying(200)
);


ALTER TABLE questions OWNER TO timbrady;

--
-- Name: questions_answers; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE questions_answers (
    question_id integer not null,
    answer_id integer not null
);


ALTER TABLE questions_answers OWNER TO timbrady;

--
-- Name: questions_question_id_seq; Type: SEQUENCE; Schema: public; Owner: timbrady
--

CREATE SEQUENCE questions_question_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE questions_question_id_seq OWNER TO timbrady;

--
-- Name: questions_question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: timbrady
--

ALTER SEQUENCE questions_question_id_seq OWNED BY questions.question_id;


--
-- Name: survey_questions; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE survey_questions (
    question_id integer not null,
    survey_id integer not null
);


ALTER TABLE survey_questions OWNER TO timbrady;

--
-- Name: surveys; Type: TABLE; Schema: public; Owner: timbrady
--

CREATE TABLE surveys (
    survey_id integer NOT NULL,
    survey_unique_id character varying(10000) NOT NULL
);


ALTER TABLE surveys OWNER TO timbrady;

--
-- Name: surveys_survey_id_seq; Type: SEQUENCE; Schema: public; Owner: timbrady
--

CREATE SEQUENCE surveys_survey_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE surveys_survey_id_seq OWNER TO timbrady;

--
-- Name: surveys_survey_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: timbrady
--

ALTER SEQUENCE surveys_survey_id_seq OWNED BY surveys.survey_id;


--
-- Name: answers answer_id; Type: DEFAULT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY answers ALTER COLUMN answer_id SET DEFAULT nextval('answers_answer_id_seq'::regclass);


--
-- Name: hosts host_id; Type: DEFAULT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY hosts ALTER COLUMN host_id SET DEFAULT nextval('hosts_host_id_seq'::regclass);


--
-- Name: questions question_id; Type: DEFAULT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY questions ALTER COLUMN question_id SET DEFAULT nextval('questions_question_id_seq'::regclass);


--
-- Name: surveys survey_id; Type: DEFAULT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY surveys ALTER COLUMN survey_id SET DEFAULT nextval('surveys_survey_id_seq'::regclass);


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY answers (answer_id, answer) FROM stdin;
\.


--
-- Name: answers_answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: timbrady
--

SELECT pg_catalog.setval('answers_answer_id_seq', 1, false);


--
-- Data for Name: host_survey; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY host_survey (host_unique_id, survey_id) FROM stdin;
\.


--
-- Data for Name: hosts; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY hosts (host_id, host_unique_id) FROM stdin;
\.


--
-- Name: hosts_host_id_seq; Type: SEQUENCE SET; Schema: public; Owner: timbrady
--

SELECT pg_catalog.setval('hosts_host_id_seq', 1, false);


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY questions (question_id, question) FROM stdin;
\.


--
-- Data for Name: questions_answers; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY questions_answers (question_id, answer_id) FROM stdin;
\.


--
-- Name: questions_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: timbrady
--

SELECT pg_catalog.setval('questions_question_id_seq', 1, false);


--
-- Data for Name: survey_questions; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY survey_questions (question_id, survey_id) FROM stdin;
\.


--
-- Data for Name: surveys; Type: TABLE DATA; Schema: public; Owner: timbrady
--

COPY surveys (survey_id, survey_unique_id) FROM stdin;
\.


--
-- Name: surveys_survey_id_seq; Type: SEQUENCE SET; Schema: public; Owner: timbrady
--

SELECT pg_catalog.setval('surveys_survey_id_seq', 1, false);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (answer_id);


--
-- Name: hosts hosts_pkey; Type: CONSTRAINT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY hosts
    ADD CONSTRAINT hosts_pkey PRIMARY KEY (host_id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (question_id);


--
-- Name: surveys surveys_pkey; Type: CONSTRAINT; Schema: public; Owner: timbrady
--

ALTER TABLE ONLY surveys
    ADD CONSTRAINT surveys_pkey PRIMARY KEY (survey_id);


--
-- PostgreSQL database dump complete
--

