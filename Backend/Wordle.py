# import libraries
import pandas as pd
import random
import datetime
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from WordleFunc import *

temp = []
letter_dict = {}

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/getWord', methods=['GET'])
def getWord():
    df = pd.read_csv('../Files/GMWords.csv')
    words = list(df.iloc[:,0].values)
    word = rand_word(words)
    temp.append(word)
    return jsonify({"1stWord":word})


@app.route("/checkWord", methods=["POST"])
def checkWord():
    word = request.json.get("word")
    correctWord = request.json.get("correctWord")
    if word == correctWord:
        return jsonify({"word": "Green"})
    letter_list = word.split()
    letters = temp[0].split()
    count = 0
    if letter_list[count] == letters[count]:
        letter_dict[count] = "Green"
    elif letter_list[count] in letters:
        letter_dict[count] = "Orange"
    else:
        letter_dict[count] = "Red"
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
