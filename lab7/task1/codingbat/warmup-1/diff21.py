def diff21(n: int):
  value = abs(n - 21)
  return 2 * value if n > 21 else value

print(diff21(19))
print(diff21(10))
print(diff21(21))
print(diff21(22))

