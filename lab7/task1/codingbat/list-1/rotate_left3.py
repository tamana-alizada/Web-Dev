def rotate_left3(nums):
  first = nums[0]
  for i in range(len(nums)-1):
    nums[i] = nums[i+1]
  nums[-1] = first
  return nums

print(rotate_left3([1, 2, 3]))
print(rotate_left3([5, 11, 9]))
print(rotate_left3([7, 0, 0]))