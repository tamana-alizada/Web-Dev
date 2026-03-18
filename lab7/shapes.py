import math
# Base class and child classes
class Shape:
  def area(self): return 0
  def perimeter(self): return 0
  def info(self): return "I am a generic shape."

class Rectangle(Shape):
  def __init__(self, width, height):
    self.width = width
    self.height = height
  # method overriding
  def area(self): return self.width * self.height
  def perimeter(self): return 2 * (self.width + self.height)
  def info(self):
    return f"Rectangle with width={self.width} and height={self.height}"
  
class Circle(Shape):
  def __init__(self, radius):
    self.radius = radius
  # method overriding
  def area(self):
    return pow(self.radius, 2) * math.pi
  def perimeter(self):
    return 2 * math.pi * self.radius
  def info(self):
    return f"Cicle with radius => {self.radius} has Area => {self.area()} and Perimeter => {self.perimeter()}"