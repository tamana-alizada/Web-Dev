n = int(input())
lst = list(map(int, input().split(" ")))

lst.reverse()

for l in lst:
  print(l, end=" ")