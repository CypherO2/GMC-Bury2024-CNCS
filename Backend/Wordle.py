# Here is a breakdown of each import statement:
import pandas as pd
import random
import datetime
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from WordleFunc import *

"""The function `getWord` reads a CSV file containing words, selects a random word from the file, and
    returns it as a JSON response.
    :return: The code snippet provided is a part of a Flask web application. When a GET request is made
    to the '/getWord' endpoint, the function 'getWord()' reads a CSV file containing words, selects the
    first word from the file using the 'rand_word()' function, and returns a JSON response with the key
    "1stWord" containing the randomly selected word."""

temp = []
letter_dict = {}

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


"""
    This function reads a CSV file containing words, selects a random word from the list, and returns it
    as a JSON response.
    :return: The `getWord` function returns a JSON response containing the key "1stWord" with a randomly
    selected word from the list of words read from the "GMWords.csv" file.
"""


@app.route("/getWord", methods=["GET"])
def getWord():
    df = pd.read_csv("../Files/GMWords.csv")
    words = list(df.iloc[:, 0].values)
    return jsonify({"1stWord": rand_word(words)})


"""
    The function `checkWord` compares a given word with a predefined word and provides feedback on each
    letter's correctness.
    :return: The function `checkWord()` is returning a JSON response with the status of each letter in
    the word compared to the first letter in the `temp` list. If the word matches the first letter in
    `temp`, it returns "Green". If a letter in the word matches the corresponding position in the `temp`
    list, it returns "Green" for that letter. If a letter in the word
"""


@app.route("/checkWord", methods=["POST"])
def checkWord():
    word = request.json.get("word")
    word = word.capitalize().lower()
    correctWord = request.json.get("correctWord").capitalize().lower()
    if word == correctWord:
        return jsonify({"word": "Green"})
    count = 0
    for Abc in word:
        if word[count] == correctWord[count]:
            letter_dict[count] = "Green"
        elif word[count] in correctWord:
            letter_dict[count] = "Orange"
        else:
            letter_dict[count] = "Red"
        count += 1
    return jsonify(
        {
            "word": {
                "Letter1": letter_dict[0],
                "Letter2": letter_dict[1],
                "Letter3": letter_dict[2],
                "Letter4": letter_dict[3],
                "Letter5": letter_dict[4],
            }
        }
    )


# The `if __name__ == "__main__":` block in Python is a common idiom used to ensure that the
# `app.run()` method is only called when the script is executed directly, rather than when it is
# imported as a module in another script.
if __name__ == "__main__":
    app.run()
