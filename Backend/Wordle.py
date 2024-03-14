#import libraries
import pandas as pd
import random
import datetime
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from WordleFunc import *

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/getWord', methods=['POST'])
def getWord():
    df = pd.read_csv('Files/GMWords.csv')
    words = list(df.iloc[:,0].values)
    return jsonify({"1stWord":rand_word(words)})























# def menu():
#     print("##- -Menu- -##")
#     print("## 1) Wordle##")
#     print("## 2) Exit  ##")
#     print("##----------##")
#     user_input = input("what do you want to do?:\n> > > ")
#     while user_input > 2 and user_input < 1:
#         return menu()
    
# def Wordle(word):
#     print("All Words are 5 Letters Long!")
#     print(" _ _ _ _ _ ")
#     user_guess = input("What is your Guess?\n> > > ")
#     if not user_guess.isalpha():
#         return Wordle()
#     if user_guess > 5:
#         print("response to long\nTry Again")
#         return Wordle()
#     count = 0
#     for letters in user_guess:
#         count += 1
#         for characters in word:
#             if letters == characters:
#                 print("Letter No.",count,"\nIn Word\nCorrect Place")
#             elif letters in word.split():
#                 print("Letter No.",count,"\nIn Word\nIncorrect Place")
#             else:
#                 print("Letter No.",count,"\nNot In Word\nIncorrect Place")

#returns random word in json: import random
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