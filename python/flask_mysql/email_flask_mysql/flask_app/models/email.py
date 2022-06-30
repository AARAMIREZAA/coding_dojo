from flask_app.config.mysqlconnection import connectToMySQL
# from flask_mysql.email_flask_mysql.flask_app.controllers.emails import email
import re	# the regex module
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
DATABASE = 'email'

class Emails:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ! READ/RETRIEVE ALL
    @classmethod
    def get_all(cls) -> list:
        query = "SELECT * FROM email;"
        results = connectToMySQL(DATABASE).query_db(query)
        emails = []
        for email in results:
            Emails.append( Emails(emails) )
        return emails

    @classmethod
    def save(cls, data):
        query = "INSERT INTO email (email) VALUES (%(email)s);"
        return connectToMySQL(DATABASE).query_db(query, data)


# create a regular expression object that we'll use later   
class User:
    @staticmethod
    def validate_user( cls,data ):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(data['email']): 
            flash("Email cannot be blank!", 'email')
            is_valid = False
        return is_valid


