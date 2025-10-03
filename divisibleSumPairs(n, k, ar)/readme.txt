Initialize counter

Set count = 0

Loop through each element in the array

For i from 0 to n - 1:

Loop through all elements after i

For j from i + 1 to n - 1:

Check divisibility

Calculate sum = ar[i] + ar[j]

If sum % k === 0, increment count by 1

Return result

Return count