import pandas as pd
import random

df = pd.read_csv('GMWords.csv')
wordList = list(df.iloc[:,0].values)

print(wordList)

guesses = 0 
template = "*****"
guess = ""
n = 1
playing = True
correctAnswer = False

while playing == True:

    num = random.randint(0,len(wordList))
    word = wordList[num]
    while correctAnswer == False:
        print(word)
        guess = input("Please insert a guess\n")
    
        letter_list = word.split()
        letters = guess.split()
        template_char = template.split()
        count = 0

        for Abc in letter_list:
            if letters[count] == letter_list[count]:
                template_char[count] = letters[count]
            count+=1
            
        
        template = template.join(template_char)    
                


            
        print(template)

        if template == word:
            print("Well done, the word was", word)
            play = input("Would you like to play again\n")
            play = play.lower()
            while not play == "yes" or not play == "no":
                if play == "yes":
                    template = "*****"
                    num = random.randint(0,len(wordList))
                    word = wordList[num]
                    break
                elif play == "no":
                    playing = False
                else:
                    play = input("Please only input yes or no\n")


