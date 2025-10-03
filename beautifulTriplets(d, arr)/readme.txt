Initialize variables:

count = 0 → to store the number of beautiful triplets.

numSet = set of all elements in arr → for fast lookup.

Iterate through each element in arr:
For each num in arr:

a. Check for forward triplet:

If num + d and num + 2*d exist in numSet:

Increment count by 1.

b. Check for backward triplet:

If num - d and num - 2*d exist in numSet:

Increment count by 1.

c. Remove the current number:

Delete num from numSet to avoid duplicate counting.

Return the result:

Return count.