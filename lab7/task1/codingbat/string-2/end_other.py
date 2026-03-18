def end_other(a, b):
  len_a = len(a)
  len_b = len(b)
  return b[-len_a:].lower() == a.lower() if len_a < len_b else a[-len_b:].lower() == b.lower()

print(end_other('Hiabc', 'abc'))
print(end_other('AbC', 'HiaBc'))
print(end_other('abc', 'abXabc'))
