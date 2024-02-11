# [Print All Subset](#Code)

Given an array Arr[] of size N, print all the subsets of the array.

**Subset:** A subset of an array is a tuple that can be obtained from the array by removing some (possibly all) elements of it

## [Problem:- Print All Subset](https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/)

```
Input: N = 3, Arr = [1, 2, 3]
Output: {}
{1}
{1, 2}
{1, 2, 3}
{1, 3}
{2}
{2, 3}
{3}
Explanation: These are all the subsets that can be formed from the given array, it can be proven that no other subset exists other than the given output.
```

```
Input: N = 2, Arr = [2, 4]
Output: {}
{2}
{2, 4}
{4}
Explanation: These are all the subsets that can be formed from the given array, it can be proven that no other subset exists other than the given output.
```

### How many Subsets are possible for an Array of size ‘N’ ?

    Before jumping into the solution, can we observe some kind of relation between the size of array N and the number of subsets formed by that array? The answer is YES, there exists a relation that is given by the following formula:

    Number of Subsets of an array of size N = 2^N

    Proof: For each element of the array we have 2 choices:

        Choice 1: Include it into the subset.
        Choice 2: Exclude it from the subset.

    Since, each element has 2 choice to contribute into the subset and we have total N elements, therefore total subsets = 2^N

    Let’s see how can we construct our solution from this observation.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230911132238/print-all-subsets.png" />

---

- Time Complexity: O(2^N), where N is the size of given array.
- Auxiliary Space:
  O(1) : if we only print our subsets
  O(2^N) : if we would store all the subsets we will need 2^N memory blocks to store each subset

# Code

[Open File](AllSubset.js)
