Find common prefix length:

Initialize commonLength = 0

While characters at position commonLength in both s and t are equal:

Increment commonLength by 1

Calculate required operations:

deletions = length of s - commonLength → Characters to remove from s

additions = length of t - commonLength → Characters to add to reach t

totalOperations = deletions + additions

Check if transformation is possible:

If totalOperations > k → Return "No"

Else if (k - totalOperations) is even → Return "Yes" (extra operations can cancel out)

Else if k >= length of s + length of t → Return "Yes" (enough operations to delete and rebuild entirely)

Else → Return "No"