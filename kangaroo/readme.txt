Input: Four integers:

x1 = starting position of kangaroo 1

v1 = jump distance of kangaroo 1

x2 = starting position of kangaroo 2

v2 = jump distance of kangaroo 2

Check relative speed

If v1 <= v2:

Kangaroo 1 will never catch up (since it starts behind or at the same place and jumps shorter or equal).

Go to step 7.

Simulate jumps

Repeat for at most 10,000 iterations:

Increase x1 by v1.

Increase x2 by v2.

Check meeting point

After each jump:

If x1 == x2:

Return "YES" (kangaroos meet).

End simulation

If the loop completes without finding equality:

Kangaroos never meet.

Return result

Return "NO".