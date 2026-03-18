n = int(input())
lst = list(map(int, input().split(" ")))

count = 0
for i in range(1, n - 1):
  if lst[i] > lst[i-1] and lst[i] > lst[i+1]:
    count += 1

print(count, end=" ")