class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.deposit = function (amount) {
      this.balance += amount;
      console.log("Deposited Amount: ", this.accountNumber);
    };
    this.withdraw = function (amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
      } else {
        console.log("Insufficient Balance");
      }
    };
  }
  displayDetails() {
    console.log("Account Number: ", this.accountNumber);
    console.log("Balance: ", this.balance);
  }
}
const account1 = new BankAccount("20013", 2000);
const account2 = new BankAccount("200131", 10000);

account1.deposit(1000);
account1.withdraw(500);
account2.deposit(3000);
account2.withdraw(200);

account1.displayDetails();
account2.displayDetails();
