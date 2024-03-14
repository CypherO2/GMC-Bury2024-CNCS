import random

def rand_word(words):
    random_index = random.randrange(0, len(words))
    word = words[random_index]
    return word