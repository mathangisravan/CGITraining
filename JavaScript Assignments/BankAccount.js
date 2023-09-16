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
        console.log(this.balance);

    }
}
customer = new BankAccount(1000);
customer.deposite(500);
customer.withdraw(200)
customer.checkbal();