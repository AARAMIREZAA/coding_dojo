class BankAccount:

    accounts = []

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if(self.balance >= amount):
            self.balance -= amount
        else:
            print("Insufficent funds: Charging a $5 Fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Your balance is: ${self.balance}")
        return self

    def yield_interest(self):
        if(self.balance > 0):
            self.balance += self.balance * self.int_rate
        return self

    @classmethod
    def display_all_accounts_info(cls):
        for accounts in  cls.accounts:
            print(f"Interest Rate :{accounts.int_rate} Account balance {accounts.balance}")


acct1 = BankAccount(0.1, 1000)
acct2 = BankAccount(0.1, 10000)
acct3 = BankAccount(0.3, 100000)

acct1.deposit(1000).deposit(1000).deposit(500).withdraw(
    500).yield_interest().display_account_info()
acct2.deposit(1000).deposit(1000).withdraw(500).withdraw(500).withdraw(
    100).withdraw(100).yield_interest().display_account_info()

BankAccount.display_all_accounts_info()