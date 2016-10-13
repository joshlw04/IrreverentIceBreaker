INSERT INTO questions (question, type, admin_email) VALUES($1, $2, $3) RETURNING *;
