Initialize Variables

min = scores[0] → the current minimum score.

max = scores[0] → the current maximum score.

minCount = 0 → counter for times minimum record is broken.

maxCount = 0 → counter for times maximum record is broken.

Iterate Through Scores

For i from 1 to scores.length - 1:

Check for new minimum

If scores[i] < min:

Update min = scores[i]

Increment minCount by 1

Check for new maximum

If scores[i] > max:

Update max = scores[i]

Increment maxCount by 1

Return Result

Return [maxCount, minCount]