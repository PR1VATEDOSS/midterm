Extract the last two characters of s and store them as period (AM or PM).

Remove the period (AM/PM) from s, then split the remaining part into three components:

hours

minutes

seconds

Convert hours from string to integer.

If period = AM:

If hours = 12, set hours = 0 (midnight case).

Otherwise, keep hours unchanged.

Else (period = PM):

If hours ≠ 12, add 12 to hours (e.g., 1PM → 13, 7PM → 19).

If hours = 12, keep unchanged (12PM is noon).

Format hours to always be two digits (e.g., 0 → "00", 5 → "05").

Build the final string in the format