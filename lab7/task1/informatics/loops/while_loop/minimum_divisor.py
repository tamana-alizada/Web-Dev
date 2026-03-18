import math
a = int(input())

a_sqrt = math.sqrt(a)
i = 2
while i <= a:
  if a % i == 0:
    print(i, end=" ")
    break
  i += 1