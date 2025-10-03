Start.

Initialize two variables:

leftToRight ← 0

rightToLeft ← 0

For each index i from 0 to n - 1:

Add the element at position (i, i) to leftToRight.

Add the element at position (i, n - 1 - i) to rightToLeft.

Compute the absolute difference:

difference ← | leftToRight - rightToLeft |

Return difference.

End.