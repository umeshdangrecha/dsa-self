const util = (N, arr, subset, res, index) => {
  res.push([...subset])

  for (let i = index; i < N; i++) {
    subset.push(arr[i])
    util(N, arr, subset, res, i + 1)
    subset.pop()
  }
}
export function printAllSubsets(arr) {
  let N = arr.length
  const subset = []
  const res = []

  util(N, arr, subset, res, 0)

  return res
}
