INSERT INTO dojos (name)
VALUES ('burbank'), ('san jose'), ('online');

SELECT * FROM dojos;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ( 'Adrian', 'Ramirez', 28, 1), ('Alden', 'Choe', 22, 1), ('KC', 'Chambers', 21, 1);

SELECT * FROM ninjas;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ( 'John', 'Ramirez', 28, 2), ('Mortimer',ninjas 'Choe', 22, 2), ('Diane', 'Chambers', 21, 2);

SELECT * FROM ninjas;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ( 'Rick', 'Ramirez', 28, 3), ('Alan', 'Choe', 22, 3), ('Kelsey', 'Chambers', 21, 3);

SELECT * FROM ninjas;

SELECT * FROM  ninjas WHERE dojo_id =1;

SELECT * FROM  ninjas WHERE dojo_id =3;

SELECT dojo_id FROM ninjas ORDER BY ID DESC LIMIT 1;

SELECT * FROM dojos WHERE id=(SELECT dojo_id FROM ninjas ORDER BY ID DESC LIMIT 1);

