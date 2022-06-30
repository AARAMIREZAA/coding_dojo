from flask import render_template, request, redirect
from flask_app import app

from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

# ! ////////  CREATE  //////////
# ! POST requires two routes:

# ! This one displays the form
@app.route('/dojo/new')
def new_dojo():
    return render_template('new_dojo.html')

@app.route('/dojos/<int:id>')
def show_dojo(id):
    data={'id':id}
    return render_template('show_dojo.html', dojo=Dojo.get_one_with_ninjas(data), ninjas=Ninja.get_all())

# ! This one handles the data from the form
@app.route('/dojo/create', methods=['POST'])
def create_dojo():
    print(request.form)
    Dojo.save(request.form)
    return redirect('/')

# ! ////////  READ or RETRIEVE  //////////
@app.route('/')
@app.route('/dojos')
def index():
# ! makes a call to the DB via the model
    dojos = Dojo.get_all()
# ! renders the template, passing data from the DB
    return render_template('index.html', dojos = dojos)

# ! //////// UPDATE  //////////
# ! POST requires two routes

@app.route('/dojo/edit/<int:id>')
def edit_dojo(id):
    data ={'id': id}
    return render_template('edit_dojo.html', dojo = Dojo.get_one(data))
