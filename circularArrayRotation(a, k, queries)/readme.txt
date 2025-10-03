Get the length of the array:

n = length of a

Optimize number of rotations:

k = k modulo n → Rotating by n or multiples of n leaves the array unchanged

Rotate the array to the right by k positions:

Take the last k elements: a.slice(n - k, n)

Take the first n - k elements: a.slice(0, n - k)

Concatenate the two slices → rotatedArray

Query elements at requested indices:

For each index in queries:

Add rotatedArray[index] to results

Return