class Pet:

    def __init__(self, name, tricks, noise):
        self.name = name
        self.tricks = tricks
        self.energy = 0
        self.health = 100
        self.noise = noise

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
