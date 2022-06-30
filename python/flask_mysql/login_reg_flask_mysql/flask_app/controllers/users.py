from flask import render_template, request, redirect, flash
from flask_app import app, bcrypt, session
from flask_app.models.user import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register/user', methods=['POST'])
def register():
    # print form data for debugging
    print(request.form)
    # validate the user data from the form
    if not User.validate_user(request.form):
        return redirect('/')
    # create a hashed version of the password
    password_hash = bcrypt.generate_password_hash(request.form['password'])
    # create a dictionary with the hashed password for the database
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password" : password_hash
    }    
    # Add user the the database with the password hashed for security
    user_id = User.save(data)
    # log in the user
    session['user_id'] = user_id
    session['user_name'] = f"{request.form['first_name']} {request.form['last_name']}"
    return redirect('/success')

@app.route('/login', methods=['POST'])
def login():
    print(request.form)
    data = {
        "email": request.form['email']
    }
    # query the db for the email from the form
    user = User.get_by_email(data)    
    # if no email is found
    if not user:
        # flash error message
        flash('no user credentials')
        # redirect to the root
        return redirect('/')
    # if email is found
        # check the password
    # if the password is incorrect
    if not bcrypt.check_password_hash(user.password, request.form['password']):
    # flash message
        flash('no password credentials')
    # redirect to root
        return redirect('/')
    # let them in or log them in
    session['user_id'] = user.id
    session['user_name'] = f"{user.first_name} {user.last_name}"
    return redirect('/success')


@app.route('/success')
def success():    
    if 'user_id' not in session:
        return redirect('/')
    return render_template('success.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')