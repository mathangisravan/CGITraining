// Bank class with methods Deposits, withdraw. check balance
class BankAccount{
    constructor(balance){
        this.balance = balance;

    }
    deposite  (add_money){
        this.add_money = add_money;
        this.balance = this.balance +this.add_money;
    }
    withdraw(remove_amount){
        this.remove_amount = remove_amount;
        this.balance = this.balance - this.remove_amount;
    }
    checkbal(){
        console.log(`Balance Amount : ${this.balance}`);

    }
}
class SavingsAccount extends BankAccount{
    constructor(balance){
        super(balance);
    }
    rate_of_interest(amount,time,interest){
        this.amount = amount;
        this.time = time;
        this.interest = interest;
        this.Total_amount = this.amount*(1 + this.time * this.rate/100);
        this.interest_earned = this.Total_amount - this.amount;
        console.log(`Total amount :${this.Total_amount}, Interst earned: ${this.interest_earned}`);

    }

}

person1 = new SavingsAccount(1000);
person1.checkbal()
person1.rate_of_interest(10000,12,12)
