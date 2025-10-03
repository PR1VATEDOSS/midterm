Convert string to array:

Let arr = array of characters from w.

Find the pivot index (i):

Set i = length of arr - 2

While i >= 0 and arr[i] >= arr[i + 1]:

Decrement i by 1

End while

If i == -1, return "no answer" (the string is the last permutation).

Find the successor index (j):

Set j = length of arr - 1

While arr[j] <= arr[i]:

Decrement j by 1

End while

Swap pivot and successor:

Swap arr[i] and arr[j]

Reverse the suffix:

Let left = arr[0…i] (including i)

Let right = arr[i+1…end]

Reverse right

Concatenate and return:

Return left + right as a string