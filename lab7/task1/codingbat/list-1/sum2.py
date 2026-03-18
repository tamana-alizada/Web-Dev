def sum2(nums):
  if len(nums) == 0:
    return 0
  if len(nums) < 2:
    return nums[0]
  else:
    return nums[0] + nums[1]
  
print(sum2([1, 2, 3]))
print(sum2([1, 1]))
print(sum2([1, 1, 1, 1]))