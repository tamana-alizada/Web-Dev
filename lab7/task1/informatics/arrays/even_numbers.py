n = int(input())
lst = list(map(int, input().split(" ")))

for l in lst:
  if l % 2 == 0:
    print(l, end=" ")