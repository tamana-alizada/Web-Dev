a, b = list(map(int, input().split(" ")))

def xor(x, y):
  if x == y:
    return 0
  else:
    return 1
print(xor(a, b))
  