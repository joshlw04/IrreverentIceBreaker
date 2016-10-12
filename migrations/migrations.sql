--update your .env file for database URL name

DROP DATABASE IF EXISTS irreverent_ice_breaker;
CREATE DATABASE irreverent_ice_breaker;

\c irreverent_ice_breaker

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR(60) NOT NULL,
  type VARCHAR(60) NOT NULL
);
