--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.4
-- Dumped by pg_dump version 9.6.4

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
    host_id integer NOT NULL
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
-- Name: results; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE results (
    result_id integer NOT NULL,
    result character varying(500) NOT NULL
);


--
-- Name: results_clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE results_clients (
    result_id integer NOT NULL,
    client_id integer NOT NULL
);


--
-- Name: results_questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE results_questions (
    result_id integer NOT NULL,
    question_id integer NOT NULL
);


--
-- Name: results_result_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE results_result_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: results_result_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE results_result_id_seq OWNED BY results.result_id;


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
-- Name: results result_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY results ALTER COLUMN result_id SET DEFAULT nextval('results_result_id_seq'::regclass);


--
-- Name: surveys survey_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY surveys ALTER COLUMN survey_id SET DEFAULT nextval('surveys_survey_id_seq'::regclass);


--
-- Name: Clients_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Clients_client_id_seq"', 61, true);


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY answers (answer_id, answer) FROM stdin;
12	mna
13	DOGO
14	A2
15	A1
16	DOG
17	FERN
18	US
19	AMERICAN DAD
21	BO
20	KDN
22	cedfe
23	cdwad
24	Dope
25	afe
26	dcaew
27	veved
28	veved
29	veved
30	vaev
31	dvawev
32	EAVD
33	yes
34	NO
35	no
36	MIDNEKd
37	adfe
38	vead
39	fdc
40	fdc
41	fdc
42	fdc
43	fdc
44	fdc
45	fdc
46	fdc
47	fdc
48	fdc
49	1
50	1
51	1
52	1
53	f
54	d
55	
56	fqcc
57	vdad
58	ced
59	cdad
60	xsx
61	cxa
62	vea
63	veda
64	bfab
\.


--
-- Name: answers_answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('answers_answer_id_seq', 64, true);


--
-- Data for Name: client_host; Type: TABLE DATA; Schema: public; Owner: -
--

COPY client_host (client_id, host_id) FROM stdin;
40	22
41	22
42	24
43	22
44	22
45	26
46	27
47	23
48	22
49	28
50	29
51	30
52	32
53	33
54	34
55	34
56	35
57	36
58	37
59	37
60	38
61	39
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

COPY clients (client_id, client_name) FROM stdin;
40	Aaron
41	PAPA JOHN
42	Jimmy
43	Aarono
44	Chris
45	Aaron
46	BoBo
47	Aaron
48	Aaron
49	BIlly
50	VERN
51	fedfev
52	BJINd
53	faevaev
54	THIMY
55	THIMY
56	MOMY
57	MONHD
58	AARON
59	georgie
60	Aaron
61	No
\.


--
-- Data for Name: host_survey; Type: TABLE DATA; Schema: public; Owner: -
--

COPY host_survey (host_id, survey_id) FROM stdin;
9	23
21	24
22	25
22	26
25	27
26	28
27	29
28	30
29	31
30	32
30	33
31	34
31	35
31	36
32	37
33	38
34	39
35	40
36	41
37	42
37	43
37	44
37	45
37	46
37	47
37	48
37	49
37	50
37	51
37	52
37	53
37	54
38	55
38	56
39	57
39	58
39	59
39	60
39	61
45	62
46	63
46	64
46	65
46	66
46	67
46	68
46	69
46	70
46	71
46	72
46	73
46	74
47	75
\.


--
-- Data for Name: hosts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY hosts (host_id, host_unique_id) FROM stdin;
21	xc5jokd
22	1wxr5tl
23	ky460q0
24	yevobnu
25	th074rv
26	pdswdf
27	stgbhf
28	scl4uf
29	kjuhgpq
30	sjdolhv
31	czn3ydt
32	tfu0yrq
33	nwfy4e9
34	l2xvsht
35	x7xc6v2
36	jsonqyp
37	ngkh52
38	56ynkue
39	gtcjrkx
40	59pbx10
41	g3uw1oq
42	zgklr6s
43	1kpd8yy
44	51k4nzy
45	y38l75k
46	ioibufc
47	5wigx
\.


--
-- Name: hosts_host_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('hosts_host_id_seq', 47, true);


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY questions (question_id, question) FROM stdin;
13	DDog
14	DOGO OR CATO
15	QUS1
16	Q2
17	DOG OR CAT?
18	TREE OR FERN?
19	US OR EU?
20	FAMILY GUY OR AMERICAN DAD
21	DOG
22	OMK
23	feef
24	qef
25	MOney
26	vwaev
27	cea
28	vev
29	vev
30	vev
31	adsv
32	aweva
33	VEWAVS
34	yes or no
35	NO or YES
36	yes
37	SHURE NOMEN
38	vead
39	fead
40	fe
41	fe
42	fe
43	fe
44	fe
45	fe
46	fe
47	fe
48	fe
49	fe
50	1
51	1
52	1
53	1
54	Q!
55	Q2
56	QUESION 1
57	eq2
58	v
59	vda
60	ca
61	cd
62	cda
63	QUEI1
64	cea
65	vea
\.


--
-- Data for Name: questions_answers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY questions_answers (question_id, answer_id) FROM stdin;
13	12
14	13
16	14
15	15
17	16
18	17
19	18
20	19
21	21
22	20
23	22
24	23
25	24
26	25
27	26
28	27
29	28
30	29
31	30
32	31
33	32
34	33
35	34
36	35
37	36
38	37
39	38
40	39
41	40
42	41
43	42
44	43
45	44
46	45
47	46
48	47
49	48
50	49
51	50
52	51
53	52
54	53
55	54
56	55
57	56
58	57
59	58
60	59
61	60
62	61
64	63
63	62
65	64
\.


--
-- Name: questions_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('questions_question_id_seq', 65, true);


--
-- Data for Name: results; Type: TABLE DATA; Schema: public; Owner: -
--

COPY results (result_id, result) FROM stdin;
1	dog
2	dog
3	fern
4	us
5	fg
6	dog
7	fern
8	us
9	fg
10	dof
11	cdn
12	mdn
13	kdj
14	fda
15	vd
16	fewf
17	bfad
18	fda
19	dwd
20	vdads
21	gwd
22	dadf
23	vwd
24	geve
25	dfadc
26	fewa
27	dab
28	edav
29	xrawe
30	vwd
31	cewc
32	ascbv
33	gewabd
34	fdav
35	dw
36	bdwdb
37	cdw
38	fd
39	dvw
40	vwdv
41	cswa
42	fdce
43	ccwadv
44	bwdb
45	cdwadc
46	fe
47	daw
48	cdw
49	brf
50	cwd
51	bdad
52	cew
53	bwd
54	1
56	3
55	2
57	4
58	5
59	6
60	7
61	8
62	0
63	1
64	2
65	3
66	10
67	11
68	12
69	13
70	DOG
71	FERN
72	EU
73	AMERICAN DAD
74	cat
75	tree
76	us
77	family guy
78	E
79	S
80	Y
81	Y
82	E
83	S
84	N
85	O
86	YES
87	no
88	M
89	A
90	Y
91	B
92	E
93	S
94	U
95	R
96	E
97	D
98	I
99	E
100	DID I DO IT?
101	yello
\.


--
-- Data for Name: results_clients; Type: TABLE DATA; Schema: public; Owner: -
--

COPY results_clients (result_id, client_id) FROM stdin;
67	43
66	43
69	43
68	43
70	43
71	43
72	43
73	43
74	44
75	44
76	44
77	44
80	55
81	55
84	55
86	56
87	56
88	57
93	57
97	57
100	57
101	58
\.


--
-- Data for Name: results_questions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY results_questions (result_id, question_id) FROM stdin;
58	17
59	18
61	20
60	19
62	17
63	18
64	19
65	20
66	17
67	18
69	20
68	19
70	17
71	18
72	19
73	20
74	17
75	18
76	19
77	20
80	33
81	33
84	33
86	35
87	34
88	36
93	36
97	36
100	36
101	37
\.


--
-- Name: results_result_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('results_result_id_seq', 101, true);


--
-- Data for Name: scores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY scores (name, score) FROM stdin;
\.


--
-- Data for Name: survey_questions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY survey_questions (question_id, survey_id) FROM stdin;
13	23
14	24
16	25
15	25
17	26
18	26
19	26
20	26
22	29
21	29
23	30
24	30
25	31
26	32
27	33
28	34
29	35
30	36
31	37
32	38
33	39
34	40
35	40
36	41
37	42
38	43
39	44
40	45
41	46
42	47
43	48
44	49
45	50
46	51
47	52
48	53
49	54
50	55
51	55
52	56
53	56
54	57
55	57
56	58
57	59
58	62
59	63
60	64
61	73
62	74
63	75
64	75
65	75
\.


--
-- Data for Name: surveys; Type: TABLE DATA; Schema: public; Owner: -
--

COPY surveys (survey_id, survey_name) FROM stdin;
23	MONKEY
24	YOYO
25	QUIZ 1
26	QUIZ 2
27	avsdvawv
28	feasdf
29	YoYo
30	YAMAH
31	young
32	tyojne
33	feafd
34	veawdv
35	veawdv
36	veawdv
37	veadsv
38	vaweesvaes
39	fefAESV
40	MASTER
41	fef
42	MOMY
43	ndjiek
44	eadv
45	feadf
46	feadf
47	feadf
48	feadf
49	feadf
50	feadf
51	feadf
52	feadf
53	feadf
54	feadf
55	QUIZ 1
56	QUIZ 1
57	QUIZ 2
58	SURVEY NAME
59	VODKN
60	undefined
61	undefined
62	addc
63	vdae
64	cdae
65	undefined
66	undefined
67	undefined
68	undefined
69	undefined
70	undefined
71	undefined
72	undefined
73	fda
74	vd
75	HELLo
\.


--
-- Name: surveys_survey_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('surveys_survey_id_seq', 75, true);


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
-- Name: results_clients results_clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY results_clients
    ADD CONSTRAINT results_clients_pkey PRIMARY KEY (result_id);


--
-- Name: results results_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY results
    ADD CONSTRAINT results_pkey PRIMARY KEY (result_id);


--
-- Name: results_questions results_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY results_questions
    ADD CONSTRAINT results_questions_pkey PRIMARY KEY (result_id);


--
-- Name: surveys surveys_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY surveys
    ADD CONSTRAINT surveys_pkey PRIMARY KEY (survey_id);


--
-- PostgreSQL database dump complete
--

