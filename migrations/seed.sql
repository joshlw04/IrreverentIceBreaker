TRUNCATE TABLE USERS;
TRUNCATE TABLE QUESTIONS;

INSERT INTO admins (email, password) VALUES ('liz@test.com', 'password');

INSERT INTO questions (question, type) VALUES ('What did you have for dinner?', 'dark');
INSERT INTO questions (question, type) VALUES ('Who are you voting for?', 'dark');
INSERT INTO questions (question, type) VALUES ('Where did you grow up?', 'dark');

INSERT INTO questions (question, type) VALUES ('Where did you last travel?', 'light');
INSERT INTO questions (question, type) VALUES ('What is your favorite color?', 'light');
INSERT INTO questions (question, type) VALUES ('How many siblings do you have?', 'light');
