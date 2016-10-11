INSERT INTO questions (question, type) VALUES($1, $2) RETURNING *;
