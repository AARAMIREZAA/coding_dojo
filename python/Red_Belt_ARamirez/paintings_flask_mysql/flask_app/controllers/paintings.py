from re import U
import re
from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models.painting import Painting
from flask_app.models.user import User

# ! ////// CREATE  //////
# TODO CREATE REQUIRES TWO ROUTES:
# TODO ONE TO DISPLAY THE FORM:
@app.route('/painting/new')
def new_painting():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("new_painting.html")

# TODO ONE TO HANDLE THE DATA FROM THE FORM
@app.route('/painting/create',methods=['POST'])
def create_painting():
    print(request.form)
    if not Painting.validate_painting(request.form):
        return redirect ('/painting/new')
    Painting.save(request.form)
    return redirect('/paintings')


# TODO READ ALL
@app.route('/paintings')
def paintings():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("paintings.html", paintings=Painting.get_all_with_user())

# TODO READ ONE
@app.route('/painting/show/<int:id>')
def show_paintings(id):
    if 'user_id' not in session:
        return redirect('/')
    data ={ 
        "id":id
    }
    return render_template("show_painting.html",painting=Painting.get_one(data))


# ! ///// UPDATE /////
# TODO UPDATE REQUIRES TWO ROUTES
# TODO ONE TO SHOW THE FORM
@app.route('/painting/edit/<int:id>')
def edit_painting(id):
    data ={ 
        "id":id
    }
    return render_template("edit_painting.html",painting=Painting.get_one(data))

# TODO ONE TO HANDLE THE DATA FROM THE FORM
@app.route('/painting/update',methods=['POST'])
def update_painting():
    if not Painting.validate_painting(request.form):
        return redirect ('/painting/new')
    Painting.update(request.form)
    return redirect('/paintings')

# ! ///// DELETE //////
@app.route('/painting/destroy/<int:id>')
def destroy_painting(id):
    data ={
        'id': id
    }
    Painting.destroy(data)
    return redirect('/paintings')

@app.route('/painting/edit/<int:id>')
def show_user(id):
    if 'user_id' not in session:
        return redirect('/')
    data ={ 
        "id":id
    }
    return render_template("edit_user.html",user=User.get_user_with_paintings(data))
