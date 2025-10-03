Initialize maxSpent = -1

This will store the maximum affordable total.

Loop through each keyboard price in keyboards (outer loop):
a. Let keyboardPrice = current keyboard price

Loop through each drive price in drives (inner loop):
a. Let drivePrice = current drive price
b. Calculate total = keyboardPrice + drivePrice

Check if total is affordable and higher than maxSpent:
a. If total <= b and total > maxSpent:

Set maxSpent = total

After checking all combinations, return