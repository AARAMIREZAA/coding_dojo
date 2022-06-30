
-- Forward engineer the books_schema from the previous chapter

DONE

-- Create a .txt file where you'll save each of your queries from below

DONE

-- Query: Create 5 different users: Jane Amsden, Emily Dixon, Theodore Dostoevsky, William Shapiro, Lao Xiu

INSERT INTO users (name) VALUES ("Jane Amsden"), ("Emily Dixon"), ("Theodore Dostoevsky"), ("William Shapiro"), ("Lao XiU");

-- Query: Create 5 books with the following names: C Sharp, Java, Python, PHP, Ruby

INSERT INTO books (title, num_of_pages) 


-- Query: Change the name of the C Sharp book to C#

UPDATE books
SET name = "C#"
WHERE id = 1;

-- Query: Change the first name of the 4th user to Bill

UPDATE users
SET name = "Bill Shapiro"
WHERE id = 4;

-- Query: Have the first user favorite the first 2 books

INSERT INTO favorites (user_id, book_id) VALUES (1,1), (1,2);

-- Query: Have the second user favorite the first 3 books

INSERT INTO favorites (user_id, book_id) VALUES (2,1), (2,2), (2,3);

-- Query: Have the third user favorite the first 4 books

INSERT INTO favorites (user_id, book_id) VALUES (3,1), (3,2), (3,3), (3,4);

-- Query: Have the fourth user favorite all the books

INSERT INTO favorites (user_id, book_id) VALUES (4,1), (4,2), (4,3), (4,4), (4,5);

-- Query: Retrieve all the users who favorited the 3rd book

SELECT * FROM users JOIN favorites ON users.id = favorites.user_id WHERE book_id = 3;

-- Query: Remove the first user of the 3rd book's favorites

DELETE FROM favorites WHERE book_id = 3 AND user_id =3;

-- Query: Have the 5th user favorite the 2nd book

INSERT INTO favorites (user_id, book_id) VALUES (5,2);

-- Find all the books that the 3rd user favorited

select * FROM books JOIN favorites ON favorites.book_id = books.id WHERE user_id = 3;

-- Query: Find all the users that favorited to the 5th book

select * FROM users JOIN favorites ON favorites.user_id = users.id WHERE book_id = 5;

-- Submit your .txt file that contains all the queries you ran in the workbench