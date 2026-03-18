def first_two(str):
  return str if len(str) < 2 else str[:2]

print(first_two('Hello'))
print(first_two('abcdefg'))
print(first_two('ab'))