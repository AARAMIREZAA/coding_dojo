from re import U
import re
from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models.magazine import Magazine

# ! ////// CREATE  //////
# TODO CREATE REQUIRES TWO ROUTES:
# TODO ONE TO DISPLAY THE FORM:
@app.route('/magazine/new')
def new_magazine():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("new_magazine.html")

# TODO ONE TO HANDLE THE DATA FROM THE FORM
@app.route('/magazine/create',methods=['POST'])
def create_magazine():
    if not Magazine.validate_magazine(request.form):
        return redirect ('/magazine/new')
    print(request.form)
    Magazine.save(request.form)
    return redirect('/magazines')

# TODO READ ALL
@app.route('/magazines')
def magazines():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("magazines.html", magazines=Magazine.get_all_with_user())

# TODO READ ONE
@app.route('/magazine/show/<int:id>')
def show_magazines(id):
    if 'user_id' not in session:
        return redirect('/')
    data ={ 
        "id":id
    }
    return render_template("show_magazine.html",magazine=Magazine.get_one(data))


# ! ///// UPDATE /////
# TODO UPDATE REQUIRES TWO ROUTES
# TODO ONE TO SHOW THE FORM
@app.route('/magazine/edit/<int:id>')
def edit_magazine(id):
    data ={ 
        "id":id
    }
    return render_template("edit_magazine.html",magazine=Magazine.get_one(data))

# TODO ONE TO HANDLE THE DATA FROM THE FORM
@app.route('/magazine/update',methods=['POST'])
def update_magazine():
    Magazine.update(request.form)
    return redirect('/magazines')

# ! ///// DELETE //////
@app.route('/magazine/destroy/<int:id>')
def destroy_magazine(id):
    data ={
        'id': id
    }
    Magazine.destroy(data)
    return redirect('/magazines')

