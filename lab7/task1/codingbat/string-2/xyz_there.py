def xyz_there(str):
  sub = 'xyz'
  for i in range(len(str) - 2):
    if sub == str[i:i+3] and str[i-1] != '.':
      return True
  return False

print(xyz_there('abcxyz'))
print(xyz_there('abc.xyz'))
print(xyz_there('xyz.abc'))