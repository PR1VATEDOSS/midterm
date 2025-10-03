Initialize a variable

date ← undefined (will hold the resulting date)

Handle the special case for 1918 (transition year in Russia)

If year === 1918:

date = "26.09.1918"

Handle Julian calendar (years before 1918)

Else if year < 1918:

If year % 4 === 0 (leap year in Julian calendar):

date = "12.09." + year

Else (non-leap year):

date = "13.09." + year

Handle Gregorian calendar (years after 1918)

Else (year > 1918):

If year % 400 === 0 or (year % 4 === 0 and year % 100 !== 0) (leap year in Gregorian calendar):

date = "12.09." + year

Else (non-leap year):

date = "13.09." + year

Return the result

Return date