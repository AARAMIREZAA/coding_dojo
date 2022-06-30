from flask import render_template, request, redirect
from flask_app import app

from flask_app.models.user import User

@app.route('/')
def index():
    users = User.get_all()
    return render_template('index.html', users = users)

@app.route('/user/new')
def new_user():
    return render_template('new_user.html')

@app.route('/user/create', methods=['POST'])
def create_user():
    User.save(request.form)
    return redirect('/')