
const input = require("readline-sync");

// Data Store.
let accounts = [];
let accountNumber = 1001 ;

function showMenu(){
    console.log("\n BANK MANAGEMENT SYSTEM ");
    console.log("1. Create Account");
    console.log("2. Deposit Money");
    console.log("3. Withdraw Money");
    console.log("4. Transfer Money");
    console.log("5. View Account");
    console.log("6. Exit");

    let choice = input.questionInt("Enter your choice = " );

    switch (choice){
        case 1:
            createAccount();
            break;
        case 2:
            depositMoney();
            break;
        case 3:
            withdrawMoney();
            break;
        case 4:
            transferMoney();
            break;
        case 5:
            viewBanlance();
        case 6:
            console.log("Thank you for using Bank System");
            process.exit();
        default:
            console.error("Invalid choice : " + choice);
            showMenu();
    }
}

function createAccount(){
    let name = input.question("Enter your name = ");
    let balance = input.questionFloat("Enter your Amount = ");
    if(balance < 0 && isNaN(balance)){
        console.error("Invalid amount");
    }else{
        let account = {
            accNum : accountNumber ,
            name : name ,
            balance : balance
        }
        accounts.push(account);
        console.log("Account created successfully.");
        console.log(`Account number: ${accountNumber}`);
        accountNumber++ ;

    }
    showMenu();

}
function depositMoney(){
    let accNO = input.questionInt("Enter your accountNumber : ");
    let amount = input.questionFloat("Enter your amount : ");
    let found = false ;
    for(let i = 0 ; i < accounts.length ; i++){
        if(accounts[i].accNum === accNO){
          if(amount > 0 ){
              accounts[i].balance += amount ;
              console.log("Amount added successfully");
          }else{
              console.log("Invalid amount");
          }
          found = true ;
          break;
        }
    }
    if(!found){
        console.log("Account not found .  ");
    }
    showMenu();

}
function withdrawMoney(){
    let accNo = input.questionInt("Enter your accountNumber : ");
    let amount = input.questionFloat("Enter your amount to withdraw : ") ;
    let found = false ;
    for(let i = 0 ;i < accounts.length ; i++){
        if(accounts[i].accNum === accNo){
            if(amount > 0 &&  accounts[i].balance  >= amount ){
                accounts[i].balance-=amount;
            }else{
                console.log("Invalid amount or balance is low . .");
            }
            found = true ;
            break;
        }

    }
    if(!found){
        console.log("Account not found .");
    }
    showMenu();
}
function viewBanlance(){
    let accNo = input.questionInt("Enter your accountNumber : ");
    let found = false ;
    for(let i = 0 ; i < accounts.length ; i++){
        if(accounts[i].accNum === accNo){
            console.log("Account Details ::")
            console.log(`Account Number : ${accounts[i].accNum}`);
            console.log(`Account Holder Name : ${accounts[i].name}`);
            console.log(`Your Bank Balance : ${accounts[i].balance}`);
            found = true ;
            break ;
        }
    }
    if(!found){
        console.log("Account not found .");
    }
    showMenu();
}
function transferMoney(){
    let sendAccNo = input.questionInt("Enter sender accountNumber : ");
    let receiveAccNo = input.questionInt("Enter Receiver accountNumber : ");
    let amount = input.questionFloat("Enter your amount : ");

    let sender  = null ;
    let receiver = null ;
    let found = false ;
    for(let i = 0 ;i < accounts.length ; i++){
        if(accounts[i].accNum === sendAccNo){
            sender = i;
        }
        if(accounts[i].accNum === receiveAccNo){
            receiver = i;
        }
        if(amount > 0 && accounts[sender].balance >= amount  ){
            accounts[sender].balance -= amount ;
            accounts[receiver].balance += amount ;
            console.log("Transfer Successfully");
            found = true ;
            break ;
        }

    }
    if(!found){
        console.log("Account not found > ");
    }
    showMenu();
}

showMenu();



