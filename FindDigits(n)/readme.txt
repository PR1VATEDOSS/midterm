Initialize variables:

count = 0 → To count digits that divide n

strN = n converted to string → To iterate through each digit

Loop through each character in strN:
a. Convert character to integer:

digit = parseInt(char)
b. Check divisibility and non-zero:

If digit != 0 and n % digit == 0 → Increment count

After the loop, return