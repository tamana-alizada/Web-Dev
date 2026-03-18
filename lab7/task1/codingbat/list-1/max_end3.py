def max_end3(nums):
  max_val = max(nums[0], nums[-1])
  for i in range(len(nums)):
    nums[i] = max_val
  return nums
print(max_end3([1, 2, 3]))
print(max_end3([11, 5, 9]))
print(max_end3([2, 11, 3]))