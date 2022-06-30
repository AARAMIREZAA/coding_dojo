INSERT INTO users (name) 
VALUES ("Jane Ameden"), ("Emily Dixon"), ("Theodore Dosloevsky"), ("William Shapiro"), ("Lao ZiU");

INSERT INTO books (title, num_of_pages) 
VALUES ("C#", "345"), ("python", "545"), ("PHP", "800"), ("Ruby", "496"), ("java", "845");

INSERT INTO favorites (user_id, book_id) VALUES (1,1), (1,2);

INSERT INTO favorites (user_id, book_id) VALUES (2,1), (2,2), (2,3);

INSERT INTO favorites (user_id, book_id) VALUES (3,1), (3,2), (3,3), (3,4);

INSERT INTO favorites (user_id, book_id) VALUES (4,1), (4,2), (4,3), (4,4), (4,5);

INSERT INTO favorites (user_id, book_id) VALUES (5,2);

SELECT * FROM books_schema.favorites;

SELECT * FROM users JOIN favorites ON users.id = favorites.user_id WHERE book_id = 3 ORDER BY users.id;
DELETE FROM favorites WHERE book_id = 3 AND user_id =3;

select * FROM books JOIN favorites ON favorites.book_id = books.id WHERE user_id = 3;

select * FROM users JOIN favorites ON favorites.user_id = users.id WHERE book_id = 5;





SELECT favorites
FROM books
WHERE id = 3;


SELECT favorites
FROM books
WHERE books, favorites id =3;

SELECT *
FROM books.favorites
WHERE id =4;

UPDATE books
SET name = "C#"
WHERE id = 1;

SELECT *
FROM books
WHERE id =1;

UPDATE users
SET name = "Bill Shapiro"
WHERE id = 4;


select * FROM books;