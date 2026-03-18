def double_char(str):
  result = ''
  for i in range(len(str)):
    result += str[i] * 2
  return result
print(double_char('The'))
print(double_char('AAbb'))
print(double_char('Hi-There'))