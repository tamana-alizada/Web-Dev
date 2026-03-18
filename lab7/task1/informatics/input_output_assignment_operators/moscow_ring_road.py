v = int(input())
t = int(input())
position = (t * v) % 109

if position < 0:
  print(position + 109)
else:
  print(position)