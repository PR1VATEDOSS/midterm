Initialize variables:

n = length of c → Total number of clouds

energy = 100 → Initial energy

position = 0 → Start at the first cloud

Loop until you return to the starting cloud:

Jump to next cloud:

position = (position + k) % n → Move k steps circularly

Decrease energy:

If c[position] == 1 → Thundercloud → energy -= 3

Else → Cumulus → energy -= 1

Repeat until position == 0 (back to start)

Return remaining energy