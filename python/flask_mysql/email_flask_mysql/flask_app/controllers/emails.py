from flask import render_template, request, redirect
from flask_app import app
from flask_app.models.email import Emails
# ! ////// CREATE  //////
# TODO CREATE REQUIRES TWO ROUTES:
# TODO ONE TO DISPLAY THE FORM:
@app.route('/')
def email():
    return render_template("index.html")

# TODO ONE TO HANDLE THE DATA FROM THE FORM
@app.route('/success',methods=['POST'])
def create_email():
    print(request.form)
    Emails.save(request.form)
    return redirect('/success')

@app.route('/')
@app.route('/success')
def emails():
    return render_template("success.html")

from flask_app.models.email import User

@app.route('/', methods=['POST'])
def register():
    if not User.validate_user(request.form):
        # we redirect to the template with the form.
        return redirect('/')
    # ... do other things
    return redirect('/success')

