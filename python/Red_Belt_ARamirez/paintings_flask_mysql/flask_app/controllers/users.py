from flask import render_template, request, redirect, session, flash
from flask_app import app, bcrypt
from flask_app.models.user import User
from flask_app.models.painting import Painting

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/register/user", methods=['POST'])
def register():
    print(request.form)
    if not User.validate_user(request.form):
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password" : pw_hash
    }
    user_id = User.save(data)
    session['user_id'] = user_id
    session['user_name'] = f"{request.form['first_name']} {request.form['last_name']}"
    return redirect('/paintings')

@app.route('/login', methods=['post'])
def login():
    data = {'email': request.form['email']}
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash('invalid credentials')
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash('invalid credentials')
        return redirect('/')
    session['user_id'] = user_in_db.id
    session['user_name'] =f"{user_in_db.first_name} {user_in_db.last_name}" 
    return redirect('/paintings')

@app.route('/user/show/<int:id>')
def user_show(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {'id': id}
    
    return render_template('show_user.html', user=User.get_user_with_paintings(data))

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/user/edit/<int:id>')
def edit_user(id):
    if 'user_id' not in session:
        return redirect('/')
    data ={ 
        "id":id
    }
    return render_template("edit_user.html",user=User.get_user_with_paintings(data))
    

## to update user info##

@app.route('/user/edit', methods=['POST'])
def register_again():
    print(request.form)
    if not User.update_user(request.form):
        print(request.form)
        return redirect(f"/user/edit/{session['user_id']}")
    user_id = User.update(request.form)
    return redirect('/paintings')



# TODO ONE TO HANDLE THE DATA FROM THE FORM
@app.route('/user/update',methods=['POST'])
def update_user():
    User.update(request.form)
    return redirect('/paintings')