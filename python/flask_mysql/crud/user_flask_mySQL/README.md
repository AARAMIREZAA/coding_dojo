# Flask Checklist

- [ ] make a new directory
- [ ] move this document inside the new directory.
- [ ] create virtual environment:

```bash
pipenv install flask pymysql
```
- [ ] activate virtual environment:

```
pipenv shell
```

- [ ] install [mysqlconnection.py](mysqlconnection.py)
- [ ] create [server.py](server.py):

```py
from flask import Flask, render_template
# import the class from friend.py
from friend import Friend
app = Flask(__name__)
@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html")
            
if __name__ == "__main__":
    app.run(debug=True)
```

- [ ] add [templates](templates/index.html) folder with all the html files you need for your application.


- [ ] add routes as needed:

```py
@app.route('/about')
def about():
    return render_template('about.html')
```