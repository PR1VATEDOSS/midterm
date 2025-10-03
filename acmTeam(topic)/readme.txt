Initialize variables:

n = length of topic (number of people)

maxTopics = 0

teamCount = 0

Loop over all pairs of people:

For i from 0 to n-1

For j from i+1 to n-1

Calculate combined topics for pair (i, j):

Set combinedTopics = 0

For k from 0 to topic[i].length - 1

If topic[i][k] == '1' or topic[j][k] == '1', increment combinedTopics

Update maximum and count:

If combinedTopics > maxTopics

Set maxTopics = combinedTopics

Set teamCount = 1

Else if combinedTopics == maxTopics

Increment teamCount by 1

After all pairs are checked:

Return [maxTopics, teamCount]