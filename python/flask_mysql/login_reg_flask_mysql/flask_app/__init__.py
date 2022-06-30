import bcrypt
from flask import Flask, session, flash
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "any string you want"