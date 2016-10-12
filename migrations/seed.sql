TRUNCATE TABLE AMDINS;
TRUNCATE TABLE QUESTIONS;

INSERT INTO admins (email, password) VALUES ('liz@test.com', 'password');

INSERT INTO questions (question, type) VALUES ('(dark) What did you have for dinner?', 'dark');
INSERT INTO questions (question, type) VALUES ('(dark) Who are you voting for?', 'dark');
INSERT INTO questions (question, type) VALUES ('(dark) Where did you grow up?', 'dark');

INSERT INTO questions (question, type) VALUES ('(light) Where did you last travel?', 'light');
INSERT INTO questions (question, type) VALUES ('(light) What is your favorite color?', 'light');
INSERT INTO questions (question, type) VALUES ('(light) How many siblings do you have?', 'light');

INSERT INTO questions (question, type) VALUES ('(light) How many cats do you have?', 'light');
INSERT INTO questions (question, type) VALUES ('(light) What is your favorite breed of dog?', 'light');
INSERT INTO questions (question, type) VALUES ('(light) What is your best memory?', 'light');
INSERT INTO questions (question, type) VALUES ('(light) What is your least favorite toilet?', 'light');

INSERT INTO questions (question, type) VALUES ('(dark) Where did you go to school?', 'dark');
INSERT INTO questions (question, type) VALUES ('(dark) What do you love to eat most?', 'dark');
INSERT INTO questions (question, type) VALUES ('(dark) Have you ever paid for sex?', 'dark');
INSERT INTO questions (question, type) VALUES ('(dark) Would you kill someone for $1,000?', 'dark');
INSERT INTO questions (question, type) VALUES ('(dark) Who would you want to be stranded with?', 'dark');

INSERT INTO questions (question, type) VALUES ('(nsfw) How many sexual partners have you had?', 'nsfw');
INSERT INTO questions (question, type) VALUES ('(nsfw) When was the last time you did a body shot?', 'nsfw');
INSERT INTO questions (question, type) VALUES ('(nsfw) What is your favorite sexual position?', 'nsfw');
INSERT INTO questions (question, type) VALUES ('(nsfw) What is the longest time you have gone without sex?', 'nsfw');
INSERT INTO questions (question, type) VALUES ('(nsfw) Have you ever had a sexual encounter outside?', 'nsfw');
INSERT INTO questions (question, type) VALUES ('(nsfw) Have you ever been caught having sex?', 'nsfw');
