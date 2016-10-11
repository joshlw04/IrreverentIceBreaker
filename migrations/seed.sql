TRUNCATE TABLE USERS;
TRUNCATE TABLE QUESTIONS;

INSERT INTO users (email, password) VALUES ('liz@test.com', 'password');

INSERT INTO questions (question, type) VALUES ('What did you have for dinner?', 'easy');
INSERT INTO questions (question, type) VALUES ('Where did you last trave?', 'easy');
