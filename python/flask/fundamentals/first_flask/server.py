from flask import Flask 

app = Flask(__name__)

@app.route('/')
def index():
    return "hello, Flask!"

@app.route('/about')
def about():
    return"All about Tyler"

if __name__ == '__main__':
    app.run(debug=True)