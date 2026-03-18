def string_match(a, b):
  count = 0
  length = min(len(a), len(b))
  for i in range(length -1):
    sub_a = a[i:i+2]
    sub_b = b[i:i+2]
    if sub_a == sub_b:
      count += 1
  return count

print(string_match('xxcaazz', 'xxbaaz'))
print(string_match('abc', 'abc'))
print(string_match('abc', 'axc'))