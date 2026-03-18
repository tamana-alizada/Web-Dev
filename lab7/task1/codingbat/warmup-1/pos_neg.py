def pos_neg(a, b, negative):
  return (a < 0 and b < 0) if negative else (a < 0 and b > 0) or (a > 0 and b < 0)

print(pos_neg(1, -1, False))
print(pos_neg(-1, 1, False))
print(pos_neg(-4, -5, True))