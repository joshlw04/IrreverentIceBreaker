-- SELECT * FROM questions WHERE $1=$2;

SELECT question FROM questions WHERE type=$1 ORDER BY random() LIMIT 1;
