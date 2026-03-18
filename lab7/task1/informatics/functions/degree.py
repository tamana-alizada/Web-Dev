num_list = list(map(int, input().split(" ")))
a = num_list[0]
n = num_list[1]

def power(a, n):
  result = 1
  i = 1
  while i <= n:
    result *= a
    i += 1
  return result

print(power(a, n))
