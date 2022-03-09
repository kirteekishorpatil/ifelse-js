// (SWITCH CASE)
let b=require("readline-sync")
var day=b.question("enter the day do you want")
var meanu=b.question("enter the meanu do you want")
switch(day) {
    case ("Monday"):
        switch(meanu){
            case "Brekfast":
                console.log("Poha")
                break
            case "Lunch":
                console.log("Chole chawal")
                break
            case "Dinner":
                console.log("Roti bhindi")
                break
        }
        break
    case ("Tuesday"):
        switch(meanu){
            case "Brekfast":
                console.log("Daliya")
                break
            case "Lunch":
                console.log("Dal chawal")
                break
            case "Dinner":
                console.log("Roti shimlamirch")
                break
        }
        break
    case ("Wednesday"):
        switch(meanu){
            case "Brekfast":
                console.log("Edali")
                break
            case "Lunch":
                console.log("Pulaw")
                break
            case "Dinner":
                console.log("Rjama puri")
                break
        }
        break
    case ("Thursday"):
        switch(meanu){
            case "Brekfast":
                console.log("Sabudana")
                break
            case "Lunch":
                console.log("Chole bhature")
                break
            case "Dinner":
                console.log("Puri bhaji")
                break
        }
        break
    case ("Friday"):
        switch(meanu){
            case "Brekfast":
                console.log("Utappa")
                break
            case "Lunch":
                console.log("Pile chawal")
                break
            case "Dinner":
                console.log("chawal kadu sbji")
                break
        }
        break
    case ("Saturday"):
        switch(meanu){
            case "Brekfast":
                console.log("Psta")
                break
            case "Lunch": 
                condsole.log("Chawal patta gobhi")
                break
            case "Dinner":
                console.log("Roti bengan")
                break
        }
        break
    case "Sonday":
        switch(meanu){
            case "Brekfast":
                console.log("Maggi")
                break
            case "Lunch":
                console.log("chawal methi")
                break
            case "Dinner":
                console.log("")
                break
        }
        break
    default:{
        console.log("no meal")
    }
    break
}
