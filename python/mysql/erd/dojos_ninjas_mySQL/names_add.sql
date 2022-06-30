INSERT INTO users (first_name, last_name, email) 
VALUES('Adrian', 'Ramirez', 'adog@gmail.com'),('Alden', 'Choe', 'adog@gmail.com'),('KC', 'Chambers','kc@gmail.com');

SELECT * FROM users;

SELECT * 
FROM users
WHERE email LIKE "handsome1993@gmail.com" LIMIT 1;

SELECT *
FROM users
WHERE id =3;

UPDATE users
SET last_name = "pancakes"
WHERE id = 3;

DELETE FROM users WHERE id = 2;

SELECT *
FROM users
ORDER BY first_name;

SELECT *
FROM users
ORDER BY first_name DESC;