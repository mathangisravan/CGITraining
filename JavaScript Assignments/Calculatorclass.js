class Calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    Add(){
        let add_result = this.a + this.b;
        return add_result
    }
    Sub(){
        let sub_result = this.a - this.b;
        return sub_result
    }
    Mul(){
        let mul_result = this.a * this.b;
        return mul_result
    }
    Div(){
        let div_result = this.a / this.b;
        return div_result
    }
}

let result = new Calculator(5,6);
console.log(result.Add());