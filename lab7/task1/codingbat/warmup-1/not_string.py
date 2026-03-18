def not_string(str):
  return str if str[:3] == "not" else "not " + str

print(not_string('candy'))
print(not_string('x'))
print(not_string('not bad'))