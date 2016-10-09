DROP DATABASE IF EXISTS question_question;
CREATE DATABASE question_question;

\c question_question

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  body VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users (id)
);
