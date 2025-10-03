Start

Input: An array of student grades (grades).

For each grade in the array (from index 0 to grades.length - 1):

Step 3.1: Check if the grade is greater than or equal to 38.

If No → Leave the grade as it is (failing grade cannot be rounded).

If Yes → Proceed to next step.

Step 3.2: Compute the next multiple of 5:

nextMultipleOf5
=
⌈
𝑔
𝑟
𝑎
𝑑
𝑒
5
⌉
×
5
nextMultipleOf5=⌈
5
grade
	​

⌉×5

Step 3.3: Check if the difference between nextMultipleOf5 and the grade is less than 3.

If Yes → Replace the grade with nextMultipleOf5.

If No → Keep the grade unchanged.

Repeat for all grades in the list.

Return the updated array of grades.

End