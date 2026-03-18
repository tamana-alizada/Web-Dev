def sum67(nums):
  sum = 0
  skip_next = False
  for i in range(len(nums)):
    if (nums[i] == 6 and not skip_next) or (skip_next and nums[i] != 7):
      skip_next = True
      continue
    elif nums[i] == 7 and skip_next:
      skip_next = False
      continue
    sum += nums[i]
  return sum

print(sum67([1, 2, 2]))
print(sum67([1, 2, 2, 6, 99, 99, 7]))
print(sum67([1, 1, 6, 7, 2]))