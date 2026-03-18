def make_out_word(out, word):
  first = out[:2]
  last = out[-2:]
  return first+word+last

print(make_out_word('<<>>', 'Yay'))
print(make_out_word('<<>>', 'WooHoo'))
print(make_out_word('[[]]', 'word'))