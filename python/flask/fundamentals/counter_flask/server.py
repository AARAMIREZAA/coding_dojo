from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "asdfjk;qwerty"

@app.route('/')
def index():
    if 'count' in session:
        session ['count'] += 1
    else:
        session['count'] = 0
    return render_template('index.html')

@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')

@app.route('/add_two')
def add_two():
    if 'count' in session:
        session ['count'] += 2
    else:
        session['count'] = 0
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)