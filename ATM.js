const b=require("readline-sync")
console.log("***WELCOME IN ATM***");
var Card_Insert=b.question("INSERT YOUR CARD")
if (Card_Insert=="ATM CARD"){
    console.log("Accept your card");
    var Language=b.question("Choose your language")
    if (Language=="English"){
        console.log("Next")
        var Pin=b.questionInt("Enter the pin")
        if (Pin=="7654"){
            console.log("Your pin is right")
            var password=b.questionInt("enter the four digit password")
            if (password==1234){
                console.log("Your password is right")
                var Account=b.question("enter the type of A/C")
                if (Account=="Saving A/C" || Account=="Current A/C"){
                    console.log("In process your service")
                    var Transections=b.question("Select your transactions")
                    if (Transections=="Cash withdrawal"){
                        console.log("In process")
                        var Amount=b.questionInt("Enter your amount")
                        var Total=b.questionInt("Enter the total amount")
                        if (Amount<=20000){
                            console.log("In the process")
                            console.log("Transaction is successfully done")
                            console.log("Cllect your cash")
                            var Receipt=b.question("Do you want receipt")
                            if (Receipt=="Yes"){
                                console.log("Collect your receipt")
                                console.log("Your remaining ballence is",(Total-Amount))
                                console.log("Tanks for transection")
                            }
                            else {
                                console.log("not a successfully")
                            }
                        }
                        else {
                            console.log("your Transaction is not successfully done")
                        }
                    }
                    else {
                        console.log("not in process")
                    }
                }
                else {
                    console.log("In process your service")
                }
            }
            else {
                console.log("your passaword is rong")
            }
        }
        else {
            console.log("your pin cod is rong")
        } 
    }
    else {
        console.log("increct")
    }
}
else {
    console.log("not insert")
}