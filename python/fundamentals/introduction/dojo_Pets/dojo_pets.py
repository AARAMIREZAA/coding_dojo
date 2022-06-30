class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

# walk() - walks the ninja's pet invoking the pet play() method
    def walk(self):
        self.pet.play()

# feed() - feeds the ninja's pet invoking the pet eat() method
    def feed(self):
        self.pet.eat()

# bathe() - cleans the ninja's pet invoking the pet noise() method
    def bathe(self):
        self.pet.make_noise()


class Pet:

    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 0
        self.health = 100
        self.noise = "woaf woaf"

# sleep() - increases the pets energy by 25
    def sleep(self):
        self.energy += 25

# eat() - increases the pet's energy by 5 & health by 10

    def eat(self):
        self.energy += 5
        self.health += 10

# play() - increases the pet's health by 5

    def play(self):
        self.health += 5

# noise() - prints out the pet's sound

    def make_noise(self):
        print(self.noise)


pet = Pet("Jill", "poodle", "jump")
ninja = Ninja("bob", "hill", "bacon", "dog_food", pet)
