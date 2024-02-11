# [Sum String using]('#Code)

Given a string of digits, determine whether it is a ‘sum-string’. A string S is called a sum-string if the rightmost substring can be written as the sum of two substrings before it and the same is recursively true for substrings before it.

## [Problem:- Sum String](https://www.geeksforgeeks.org/check-given-string-sum-string/)

```
“12243660” is a sum string.
Explanation : 24 + 36 = 60, 12 + 24 = 36

“1111112223” is a sum string.
Explanation: 111+112 = 223, 1+111 = 112

“2368” is not a sum string
```

In general, a string S is called sum-string if it satisfies the following properties:

```
sub-string(i, x) + sub-string(x+1, j)
 = sub-string(j+1, l)
and
sub-string(x+1, j)+sub-string(j+1, l)
 = sub-string(l+1, m)
and so on till end.
```

From the examples, we can see that our decision depends on the first two chosen numbers. So we choose all possible first two numbers for a given string. Then for every chosen two numbers, we check whether it is sum-string or not? So the approach is very simple. We generate all possible first two numbers using two substrings s1 and s2 using two loops. then we check whether it is possible to make the number s3 = (s1 + s2) or not. If we can make s3 then we recursively check for s2 + s3 and so on.

- Time Complexity: O(n*n*n), where n is the length of the string.
- Auxiliary Space: O(n), where n is the length of the string.

# Code

[Open File]('sum-string.js)
