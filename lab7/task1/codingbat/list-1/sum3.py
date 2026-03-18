def sum3(nums):
  sum = 0
  for i in range(len(nums)):
    sum += nums[i]
  return sum
print(sum3([1, 2, 3]))
print(sum3([5, 11, 2]))
print(sum3([7, 0, 0]))