def sum13(nums):
  sum = 0
  skip_next = False
  for i in range(len(nums)):
    if nums[i] == 13:
      skip_next = True
      continue
    if skip_next:
      skip_next = False
      continue
    sum += nums[i]
  return sum

print(sum13([1, 2, 2, 1]))