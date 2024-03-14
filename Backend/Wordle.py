#import libraries
import pandas as pd
import random
import datetime
from datetime import datetime

df = pd.read_csv('Files/GMWords.csv')
words = list(df.iloc[:,0].values)

# print(words)

def rand_word(words):
    random_index = random.randrange(0, len(words))
    word = words[random_index]
    return word

def menu():
    print("##- -Menu- -##")
    print("## 1) Wordle##")
    print("## 2) Exit  ##")
    print("##----------##")
    user_input = input("what do you want to do?:\n> > > ")
    while user_input > 2 and user_input < 1:
        return menu()
    
def Wordle(word):
    print("All Words are 5 Letters Long!")
    print(" _ _ _ _ _ ")
    user_guess = input("What is your Guess?\n> > > ")
    if not user_guess.isalpha():
        return Wordle()
    if user_guess > 5:
        print("response to long\nTry Again")
        return Wordle()
    count = 0
    for letters in user_guess:
        count += 1
        for characters in word:
            if letters == characters:
                print("1st Letter\nIn Word\nCorrect Place")
            elif letters in word.split():
                print("{} Letter\nIn Word\nIncorrect Place")