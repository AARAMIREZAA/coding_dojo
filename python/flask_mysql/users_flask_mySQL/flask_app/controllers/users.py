from flask import render_template, request, redirect
from flask_app import app

from flask_app.models.user import User

# ! ///////   CREATE   ////////
# ! POST requires two routes:

# ! This one displays the form
@app.route('/user/new')
def new_user():
    return render_template('new_user.html')

# ! This one handles the data from the form
@app.route('/user/create', methods=['POST'])
def create_user():
    User.save(request.form)
    return redirect('/')

# ! ////// READ or RETRIEVE ///////
@app.route('/')
def index():
# ! makes a call to the DB via the model
    users = User.get_all()
# ! renders the template, passing data from the DB
    return render_template('index.html', users = users)

# ! ///// UPDATE /////
# ! POST that requires two routes

@app.route('/user/edit/<int:id>')
def edit_user(id):
    data = {'id': id}
    return render_template('edit.html', user = User.get_one(data))

@app.route('/user/<int:id>')
def get_user(id):
    data = {'id': id}
    return render_template('user_card.html', user = User.get_one(data))

@app.route('/user/update', methods=['POST'])
def update_user():
    User.update(request.form)
    return redirect('/')

@app.route('/user/destroy/<int:id>')
def destroy_user(id):
    data = {'id': id}
    User.destroy(data)
    return redirect('/')