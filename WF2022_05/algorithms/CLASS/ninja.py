ninjas = [
    {'first_name': 'Tyler', 'age': 39}
    {'first_name': 'Ed', 'age': 25}
    {'first_name': 'Adrian', 'age': 18}
    
]

class Ninja:

    ninjas = []

    def __init__(self, data):
        self.first_name = data['first_name']
        self.age = data['age']

    def write_code():
        print("I am learning Python")

    @classmethod
    def create_ninjas(cls, ninja_list):
        for ninja in ninja_list:
            ninja.ninjas.append(cls(ninjas))
