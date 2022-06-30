class BankAccount:

    accounts = []

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.account.balance += amount
        return self

    def withdraw(self, amount):
        if(self.account.balance >= amount):
            self.account.balance -= amount
        else:
            print("Insufficent funds: Charging a $5 Fee")
            self.account.balance -= 5
        return self

    def display_account_info(self):
        print(f"Your balance is: ${self.account.balance}")
        return self

    def yield_interest(self):
        if(self.account.balance > 0):
            self.account.balance += self.account.balance * self.int_rate
        return self

    @classmethod
    def display_all_accounts_info(cls):
        for accounts in  cls.accounts:
            print(f"Interest Rate :{accounts.int_rate} Account balance {accounts.balance}")


acct1 = BankAccount(0.1, 1000)
acct2 = BankAccount(0.1, 10000)
acct3 = BankAccount(0.3, 100000)


class User:

    def __init__(self, name, email, savings, checking):
        self.name = name
        self.email = email
        self.accounts = {
            'savings': savings, 
            'checking': checking}

    def deposit(self, amount, type):
        self.accounts[type].deposit(amount)

    def withdrawl(self, amount, type):
        self.accounts[type].withdrawl(amount)

    def display_user_balance(self):
        self.account.display_account_info()

    def greeting(self):
        print(f"Hello {self.name} Welcome back TO Coding Dojo Credit Union")


    BankAccount.display_all_accounts_info()


savings = BankAccount(.1, 10000)
checking = BankAccount(.1, 5000)

Adrian = User("Alden", "ac@aol.com", savings, checking)