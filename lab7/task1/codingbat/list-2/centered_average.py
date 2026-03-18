def centered_average(nums):
  sum = 0
  count = 0
  min_val = min(nums)
  max_val = max(nums)
  min_count = False
  max_count = False
  for i in range(len(nums)):
    if(nums[i] == min_val and not min_count):
      min_count = True
    elif(nums[i] == max_val and not max_count):
      max_count = True
    else:
      sum += nums[i]
      count += 1
  return sum // count
print(centered_average([1, 2, 3, 4, 100]))
print(centered_average([1, 1, 5, 5, 10, 8, 7]))
print(centered_average([-10, -4, -2, -4, -2, 0]))