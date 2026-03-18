def cat_dog(str):
  cat = False
  dog = False
  cat_count = 0
  dog_count = 0
  if(len(str) < 3):
    return True
  for i in range(len(str) - 2):
    sub = str[i:i+3]
    if sub == 'cat':
      cat = True
      cat_count += 1
    elif sub == 'dog':
      dog = True
      dog_count += 1
  return cat and dog and dog_count == cat_count
print(cat_dog('catdog'))
print(cat_dog('catcat'))
print(cat_dog('1cat1cadodog'))