Initialize counters

Set appleCount = 10

Set orangeCount = 10

Process apples

For each apple distance in apples:

Compute the landing position as a + apple.

If the landing position lies between s and t (inclusive):

Increment appleCount by 1.

Process oranges

For each orange distance in oranges:

Compute the landing position as b + orange.

If the landing position lies between s and t (inclusive):

Increment orangeCount by 1.

Output results

Print appleCount - 10 (the total number of apples that landed on the house).

Print orangeCount - 10 (the total number of oranges that landed on the house).

End