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


@app.route("/getWord", methods=["GET"])
def getWord():
    df = pd.read_csv("../Files/GMWords.csv")
    words = list(df.iloc[:, 0].values)
    return jsonify({"1stWord": rand_word(words)})


@app.route("/checkWord", methods=["POST"])
def checkWord():
    word = request.json.get("word")
    word = word.lower().capitalise()
    if word == temp[0]:
        return jsonify({"word": "Green"})
    letter_list = word.split()
    letters = temp[0].split()
    count = 0
    for Abc in letter_list:
        if letter_list[count] == letters[count]:
            letter_dict[count] = "Green"
        elif letter_list[count] in letters:
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


if __name__ == "__main__":
    app.run()


# def menu():
#     print("##- -Menu- -##")
#     print("## 1) Wordle##")
#     print("## 2) Exit  ##")
#     print("##----------##")
#     user_input = input("what do you want to do?:\n> > > ")
#     while user_input > 2 and user_input < 1:
#         return menu()


# returns random word in json: import random
# import csv
#
#

#
#

#

# def getnums():
#     wordsList = []
#     with open("./GMWords.csv", 'r') as file:
#         csvreader = csv.reader(file)
#         for row in csvreader:
#             wordsList.append(row)

#     lennList = len(wordsList)

#     randomNums=[]
#     for i in range(1):
#         r = random.randint(0,lennList)
#         if r not in randomNums:
#             randomNums.append(r)

#     randomWordsList = []
#     for i in range(len(randomNums)):
#         randomWordsList.append(wordsList[i])

#     Words_L = []
#     for i in randomWordsList:

#         wordOne = i[0]

#         json = {
#             "word":wordOne,

#         }
#         Words_L.append(json)

#     return jsonify({"WordsList": Words_L})