Initialize beautifulCount = 0

This will track the number of beautiful days.

Loop through each day day from i to j (inclusive):
a. Reverse the digits of the day:

Convert day to string → split into characters → reverse → join → convert back to integer → reversedDay
b. Check if the day is beautiful:

If abs(day - reversedDay) % k == 0 → increment beautifulCount by 1

After the loop, return beautifulCount