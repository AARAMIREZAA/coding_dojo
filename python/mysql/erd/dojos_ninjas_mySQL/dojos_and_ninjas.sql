-- Forward engineer the dojos_and_ninjas_schema from the previous chapter

    DONE

-- Create a .txt file where you'll save each of your queries from below

    DONE

-- Query: Create 3 new dojos


INSERT INTO dojos (name)
VALUES ('burbank'), ('san jose'), ('online');


-- Query: Delete the 3 dojos you just created


-- Query: Create 3 more dojos

INSERT INTO dojos (name)
VALUES ('burbank'), ('san jose'), ('online');

-- Query: Create 3 ninjas that belong to the first dojo

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ( 'Adrian', 'Ramirez', 28, 1), ('Alden', 'Choe', 22, 1), ('KC', 'Chambers', 21, 1);


-- Query: Create 3 ninjas that belong to the second dojo

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ( 'John', 'Ramirez', 28, 2), ('Mortimer', 'Choe', 22, 2), ('Diane', 'Chambers', 21, 2);

-- Query: Create 3 ninjas that belong to the third dojo

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ( 'Rick', 'Ramirez', 28, 3), ('Alan', 'Choe', 22, 3), ('Kelsey', 'Chambers', 21, 3);

-- Query: Retrieve all the ninjas from the first dojo

SELECT * FROM  ninjas WHERE dojo_id =1;

-- Query: Retrieve all the ninjas from the last dojo

SELECT * FROM  ninjas WHERE dojo_id =3;

-- Query: Retrieve the last ninja's dojo

SELECT * FROM dojos WHERE id=(SELECT dojo_id FROM ninjas ORDER BY ID DESC LIMIT 1);

-- Submit your .txt file that contains all the queries you ran in the shell