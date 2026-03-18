a = int(input())

i = 0
result = "NO"
while pow(2, i) <= a:
  if pow(2, i) == a:
    result = "YES"
    break
  i += 1
print(result, end=" ")