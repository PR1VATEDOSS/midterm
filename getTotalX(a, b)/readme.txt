Input:

Array a

Array b

Initialize:

count = 1 → used to multiply with max of a

total = 0 → count of numbers satisfying the condition

maxA = maximum value in array a

minB = minimum value in array b

Loop while candidate number ≤ minB:

currentNumber = maxA * count

Initialize:

multipleOfAllA = true → check if currentNumber is a multiple of all elements in a

factorOfAllB = true → check if currentNumber is a factor of all elements in b

Check multiples of array a:

For each element ai in a:

If currentNumber % ai !== 0, set multipleOfAllA = false and break loop

Check factors of array b:

For each element bj in b:

If bj % currentNumber !== 0, set factorOfAllB = false and break loop

Update total:

If both multipleOfAllA and factorOfAllB are true:

Increment total by 1

Increment counter:

count++

Repeat loop until maxA * count > minB

Return result:

Return total → number of integers satisfying both conditions