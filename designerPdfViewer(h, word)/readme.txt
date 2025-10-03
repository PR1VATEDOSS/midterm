Initialize maxHeight to 0

This will track the tallest letter in the word.

Loop through each character char in word:
a. Find the index of char in the alphabet:

index = ASCII code of char - ASCII code of 'a'
b. Update maxHeight:

maxHeight = maximum of maxHeight and h[index]

Calculate area of highlighted rectangle:

area = maxHeight * length of word

Return