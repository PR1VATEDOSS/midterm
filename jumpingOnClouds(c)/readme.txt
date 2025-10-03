Initialize variables:

jumps = 0 → counts the number of jumps

position = 0 → starting at the first cloud

n = length of c

Loop until reaching the last cloud:

While position < n - 1:

Check if a two-step jump is possible:

If position + 2 < n and c[position + 2] == 0:

position += 2

Else:

position += 1

Increment jump count:

jumps += 1

Return result:

return jumps