def same_first_last(nums):
  return len(nums) > 0 and nums[0] == nums[len(nums) - 1]
print(same_first_last([1, 2, 3]))
print(same_first_last([1, 2, 3, 1]))
print(same_first_last([1, 2, 1]))