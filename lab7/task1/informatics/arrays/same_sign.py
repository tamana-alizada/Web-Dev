n = int(input())
lst = list(map(int, input().split(" ")))

result = "NO"
for i in range(1, n):
  if (lst[i] < 0 and lst[i-1] < 0) or (lst[i] > 0 and lst[i - 1] > 0):
    result = "YES"

print(result)