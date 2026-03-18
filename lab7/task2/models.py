class Animal:
  # Constructor
  def __init__(self, name, age, diet):
    self.name = name
    self.age = age
    self.diet = diet
  
  def make_sound(self):
    return f"{self.name} is making a sound."
  
  def eat(self):
    return f"{self.name} is eating."
  
  def __str__(self):
    return f"Animal(name: {self.name}, age: {self.age}, diet: {self.diet})"
  
class Dog(Animal):
  sound = "barking" # class variable -> shared by all dogs
  def __init__(self, name, age, diet, is_vaccinated):
    super().__init__(name, age, diet)
    self.is_vaccinated = is_vaccinated

  # method override(polymorphism)
  def make_sound(self):
    return f"{self.name} is {self.sound}."
  
  def eat(self):
    return f"Dog {self.name} is eating."
  
  def __str__(self):
    return (
      f"Dog(name: {self.name}, age: {self.age}, diet: {self.diet}, vaccinated: {self.is_vaccinated})"
    )
  
class Cat(Animal):
  sound = "meowing" # class variable -> shared by all cats
  def __init__(self, name, age, diet, is_domesticated):
    super().__init__(name, age, diet)
    self.is_domesticated = is_domesticated

  # method override
  def make_sound(self):
    return f"{self.name} is {self.sound}."
  
  def __str__(self):
    return (
      f"Cat(name: {self.name}, age: {self.age}, diet: {self.diet}, domesticated: {self.is_domesticated})"
    )
  
