Initialize counter

Set count = 0 → keeps track of valid segments.

Loop through the chocolate array

For i from 0 to s.length - m:

Calculate the sum of a segment of length m starting at i

Set sum = 0

For j from 0 to m - 1:

Add s[i + j] to sum

Check if sum equals d

If sum === d:

Increment count by 1

Return the result