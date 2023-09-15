# Base Class parent class
class Shape:
    def __init__(self, color):
        self.color = color

    def area(self):
        pass


# Derived Class(child clas) inheriting from shape
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius

    def area(self):
        return 3.14159*self.radius ** 2


# Derived Class child class inheriting from shape
class Rectangle(Shape):

    def __init__(self,color,width,height):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


# Creating instances of derived class
circle = Circle("Red",5)
rectangle = Rectangle("Blue",5,6)
print(f"Area of the {circle.color} Circle: {circle.area():.2f}  square units")
print(f"Area of the {rectangle.color} Rectangle :{rectangle.area()} square units")


