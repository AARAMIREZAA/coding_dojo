from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/<int:number>')
@app.route('/<int:number>/<color1>')
@app.route('/<int:number>/<color1>/<color2>')
def blue_box(number = 8, color1="red", color2="black"):
    return render_template('index.html',number = number, color1 = color1, color2 = color2) 

if __name__ == '__main__':
    app.run(debug=True)