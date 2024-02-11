const calSum = (s1, s2) => {
  return (+s1 + +s2).toString()
}

const util = (str, beg, l1, l2) => {
  const s1 = str.substring(beg, beg + l1)
  const s2 = str.substring(beg + l1, beg + l1 + l2)
  const s3 = calSum(s1, s2)

  const s3Len = s3.length

  if (
    s3Len > str.length - (beg + l1 + l2) ||
    s3 != str.substring(beg + l1 + l2, beg + l1 + l2 + s3Len)
  ) {
    return false
  }

  // if we reach at the end of the string
  if (str.length === beg + l1 + l2 + s3Len) {
    return true
  }
  // otherwise call recursively for n2, s3
  return util(str, beg + l1, l2, s3Len)
}

export function isSumStr(str) {
  let n = str.length

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (util(str, 0, i, j)) {
        return true
      }
    }
  }
  return false
}
