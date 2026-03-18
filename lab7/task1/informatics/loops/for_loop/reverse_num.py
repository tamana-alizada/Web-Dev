x = int(input())
i = 1
sum = 0
while x != 0:
  sum = sum * 10 + (x % 10)
  x //= 10

print(sum)