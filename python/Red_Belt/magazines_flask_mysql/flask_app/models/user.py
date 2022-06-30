from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash, re, session
from pprint import pprint
from flask_app.models.magazine import Magazine

DATABASE = 'magazines'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.magazines = []
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def save(cls, data:dict ) -> int:
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES ( %(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL(DATABASE).query_db( query, data )

    ## ! used in user validation
    @classmethod
    def get_by_email(cls,data:dict) -> object or bool:
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        print(result)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_user_with_magazines(cls, data:dict):
        query = "SELECT * FROM users LEFT JOIN magazines ON users.id = magazines.user_id WHERE users.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        pprint(results)
        user = cls(results[0])
        for result in results:
            magazine_dict = {
                'id': result['magazines.id'],
                'name': result['name'],
                'description': result['description'],
                'user_id': result['user_id'],
                'created_at': result['magazines.created_at'],
                'updated_at': result['magazines.updated_at']
            }
            user.magazines.append(Magazine(magazine_dict))
        return user
    # ! READ/RETRIEVE ONE

    @classmethod
    def get_one(cls,data:dict) -> object:
        query  = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])

    # ! READ/RETRIEVE ALL ----- for account edit, update user and show magazine
    @classmethod
    def get_all_with_user(cls) -> list:
        query = "SELECT * FROM magazines JOIN users ON users.id = magazines.user_id;"
        results = connectToMySQL(DATABASE).query_db(query)
        pprint(results)
        magazines = []
        for u in results:
            magazines.append( cls(u) )
        return magazines

    @classmethod
    def get_all(cls) -> list:
        query = "SELECT * FROM magazines;"
        results = connectToMySQL(DATABASE).query_db(query)
        magazines = []
        for u in results:
            magazines.append( cls(u) )
        return magazines

    
    # ! UPDATE
    @classmethod
    def update(cls,data:dict) -> int:
        query = "UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s WHERE users.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def update_user(user:dict) -> bool:
        is_valid = True # we assume this is true
        if len(user['first_name']) < 3:
            flash("First name must be at least 3 characters.")
            is_valid = False
        if len(user['last_name']) < 3:
            flash("Last name must be at least 3 characters.")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_user(user:dict) -> bool:
        is_valid = True # ! we assume this is true
        if len(user['first_name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(user['last_name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False
        if user['password'] != user['confirm-password']:
            flash("Passwords do not match")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 character long.")
            is_valid = False
        return is_valid

