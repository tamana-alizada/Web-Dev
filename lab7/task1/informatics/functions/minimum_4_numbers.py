import math
def min_func(lst):
  min_val = lst[0]
  for item in lst[1:]:
    if item < min_val:
      min_val = item
  return min_val


lst = list(map(int, input().split(" ")))
print(min_func(lst))