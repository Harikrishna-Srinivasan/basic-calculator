from flask import Flask, render_template # type: ignore

app = Flask(__name__)

__buttons__ = [["CLR", "DEL", "%", "+"],
			   ["7", "8", "9", "-"],
			   ["4", "5", "6", "*"],
			   ["1", "2", "3", "/"],
			   [".", "0", "^", "="]]

@app.route("/")
def index():
	return render_template("index.html", buttons=__buttons__)
