a = int(input())

def sign(a):
  if a == 0: 
    return 0
  elif a > 0:
    return 1
  else:
    return -1

print(sign(a))