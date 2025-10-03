Create a list of unique ranks:

Remove duplicates from ranked while preserving order → uniqueRanks

Initialize results array:

results = []

Set n to the length of uniqueRanks

This represents the current position from the bottom of the leaderboard

Loop through each score in player:
a. While n > 0 and score is greater than or equal to uniqueRanks[n-1]:

Decrease n by 1 → move up the leaderboard
b. Append n + 1 to results → rank of current player score

After processing all player scores, return