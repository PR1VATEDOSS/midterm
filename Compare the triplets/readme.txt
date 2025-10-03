Steps:

Start.

Initialize two counters:

alice ← 0

bob ← 0

For each index i from 0 to length(a) - 1:

If a[i] > b[i], then increment alice by 1.

Else if a[i] < b[i], then increment bob by 1.

Otherwise (if a[i] == b[i]), do nothing.

After finishing the loop, return the array [alice, bob].

End.