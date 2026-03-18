import math
a = int(input())

count = 0
limit = int(math.sqrt(a))

for i in range(1, a + 1):
  if a % i == 0:
    print(i, end=" ")
