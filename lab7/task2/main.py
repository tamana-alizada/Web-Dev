from models import Animal, Dog, Cat

def main():
  # Create objects
  animal = Animal("GenericAnimal", 5, "Omnivore")
  dog = Dog("Buddy", 3, "Carnivore", True)
  cat = Cat("Whiskers", 2, "Carnivore", True)

  # Store in a list
  animals = [animal, dog, cat]

  for a in animals:
    print(a) # __str__
    print(a.make_sound())
    print(a.eat())
    print("-" * 40)

if __name__ == "__main__":
  main()

