from crypt import methods
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "qwerty"

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data', methods=['POST'])
def handle_data():
    print(request.form['info'])
    session['session_info'] = request.from['info']
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)