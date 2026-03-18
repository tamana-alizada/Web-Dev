n = int(input())

power = 0
result = 0
while n != 0:
  result += n % 10 * (2**power)
  n = n // 10
  power += 1

print(result)

