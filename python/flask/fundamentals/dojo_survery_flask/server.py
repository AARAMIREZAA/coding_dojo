from flask import Flask, render_template, request, redirect, session
from flask import flash

DATABASE = 'dojo_survey'

app = Flask(__name__)
app.secret_key = 'asdfasdfkjasdlfkjasd'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def create_user():
    print(request.form)
    session['name'] = request.form['name']
    session ['location'] = request.form['location']
    session ['language']= request.form['language']
    session ['comment'] = request.form['comment']
    return redirect('/result')

@app.route("/result")
def show_info():
    return render_template("result.html", name_on_template = session['name'], location_on_template = session['location'],
    language_on_template = session['language'],comment_on_template = session['comment'])


@app.route('/', methods=['POST'])
def create_dojos():
    # if there are errors:
    # We call the staticmethod on dojo to validate
    if not Dojo.validate_dojos(request.form):
        # redirect to the route where the burger form is rendered.
        return redirect('/')
    # else no errors:
    Dojo.save(request.form)
    return redirect("/")

class Dojo:
    # Other Dojo methods up yonder.
    # Static methods don't have self or cls passed into the parameters.
    # We do need to take in a parameter to represent our dojo
    @staticmethod
    def validate_dojos(dojos):
        is_valid = True # we assume this is true
        if len(dojos['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(dojos['location']) < 3:
            flash("Please select a location.")
            is_valid = False
        if int(dojos['language']) < 200:
            flash("Please select a language.")
            is_valid = False
        if len(dojos['comment']) < 3:
            flash("Please leave a comment.")
            is_valid = False
        return is_valid



if __name__ == '__main__':
    app.run(debug=True)