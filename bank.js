//Declaring global Variables
var balance=0
var deposit1=0
var withdraw1=0


//Main Functon
function main(){
    var option=Number(document.getElementById("option").value)
    
    switch (option) {
        case 0:
            alert("Please Choose an Option")
            break;

        case 1:
            balance=deposit(balance)
            break;    

        case 2:
            this.balance=withdraw(this.balance) 
            break;        
    
        default:
            break;
    }

    document.getElementById("displayBalance").innerHTML=this.balance   
}


//funcion to Deposit Money to the BANK

function deposit(balance){

    let b=Number(document.getElementById("balance").value)
    this.balance=this.balance+b
    document.getElementById("depositBalance").innerHTML=""+this.balance
    deposit1=deposit1+b
    document.getElementById("depositBalance").innerHTML=deposit1
    return this.balance

}



//function to Withdraw Money From the BANK

function withdraw(balance){

    let b=Number(document.getElementById("balance").value)

    if(balance==0){
        console.log("dhdihodn")
       document.getElementById("w").innerHTML="**Please Deposit Something to Withdraw from the BANK"
    }
    else if(b>balance){
        document.getElementById("w").innerHTML="**Insufficient Balance"
    }
    else{
        this.balance=this.balance-b
        withdraw1=withdraw1+b
        document.getElementById("withdrawBalance").innerHTML=withdraw1
    }
    return this.balance
}