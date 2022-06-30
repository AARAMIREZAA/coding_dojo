class User:
    def __init__(self, name, email, password, account):
        self.name = name
        self.email = email
        self.password = password
        self.account = account

    def deposit(self, amount):
        self.account_balance += amount
        return self

    def withdrawl(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(self.account_balance)

    def greeting(self):
        print(f"Hello {self.name} Welcome back TO Coding Dojo Credit Union")
        

adrian = User("adrian", "adog@aol.com", "handsomecoder123")
tyler = User("tyler", "tmax@gmail.com", "luvsCats")
amber = User("amber", "amberH@icloud.com", "POamberOP")
adrian.greeting()
adrian.deposit(100).deposit(100).withdrawl(100).display_user_balance()
tyler.greeting()
tyler.deposit(1000).deposit(530).deposit(10).deposit(80).display_user_balance()
amber.greeting()
amber.deposit(2500).withdrawl(1000).withdrawl(1500).withdrawl(7000).display_user_balance()
