Initialize variables:

level = 0 → current elevation relative to sea level

valleys = 0 → number of valleys traversed

Loop through each step in the path (from 0 to steps - 1):
a. If the current step is 'U' (up):

Increment level by 1

If level becomes 0 (back to sea level):

Increment valleys by 1 → a valley has ended
b. Else (step is 'D'):

Decrement level by 1

After the loop, return valleys