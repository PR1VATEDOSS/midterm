Initialize result array:

result = []

Loop while sticks remain:

While arr is not empty:

Record current count:

Append the length of arr to result

Find smallest stick:

minStick = minimum value in arr

Cut all sticks by smallest length and remove zeros:

For each stick in arr: subtract minStick

Remove any sticks that are now zero

Update arr:

arr = array of sticks after cutting and removing zeros

Return result array:

return result