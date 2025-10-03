Remove spaces:
Remove all spaces from s.

Calculate dimensions:

Let length = length of s.

Set cols = ceiling of √length.

Set rows = ceiling of length / cols.

Initialize storage:
Create an empty list encrypted to store each column string.

Loop through columns:
For c from 0 to cols - 1:

Initialize an empty string word.

Loop through rows: For r from 0 to rows - 1:

Calculate index = r * cols + c.

If index < length, append s[index] to word.

Append word to encrypted.

Form final output:
Join all strings in encrypted with spaces to form the encrypted string.

Return result:
Return the final encrypted string.