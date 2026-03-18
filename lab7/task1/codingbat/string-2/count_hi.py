def count_hi(str):
  count = 0
  for i in range(len(str) - 1):
    sub = str[i:i+2]
    if sub == 'hi':
      count += 1

  return count
print(count_hi('abc hi ho'))
print(count_hi('ABChi hi'))
print(count_hi('hihi'))