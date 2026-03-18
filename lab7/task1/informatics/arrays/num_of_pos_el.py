n = int(input())
lst = list(map(int, input().split(" ")))

count = 0
for l in lst:
  if l > 0:
    count += 1

print(count, end=" ")