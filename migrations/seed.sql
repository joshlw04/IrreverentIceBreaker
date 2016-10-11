TRUNCATE TABLE USERS;
TRUNCATE TABLE QUESTIONS;

INSERT INTO users (email, password) VALUES ('liz@test.com', 'password');

INSERT INTO questions (question, type) VALUES ('What did you have for dinner?', 'hard');
INSERT INTO questions (question, type) VALUES ('Who are you voting for?', 'hard');
INSERT INTO questions (question, type) VALUES ('Where did you grow up?', 'hard');

INSERT INTO questions (question, type) VALUES ('Where did you last travel?', 'easy');
INSERT INTO questions (question, type) VALUES ('What is your favorite color?', 'easy');
INSERT INTO questions (question, type) VALUES ('How many siblings do you have?', 'easy');
