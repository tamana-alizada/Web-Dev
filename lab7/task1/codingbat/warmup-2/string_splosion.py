def string_splosion(str):
  result = ''
  for i in range(len(str) + 1):
    result += str[:i]
  return result

print(string_splosion('Code'))
print(string_splosion('abc'))
print(string_splosion('ab'))