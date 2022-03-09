var s=require("readline-sync")
var amt=s.questionInt("enter the amount")
note500=note100=note50=note20=note10=note5=note2=note1=note=0
if (amt>=500)
    note500=Math.floor(amt/500)
    amt=amt-note500*500
if (amt>=100)
    note100=Math.floor(amt/100)
    amt=amt-note100*100
if (amt>=50)
    note50=Math.floor(amt/5)
    amt=amt-note50*50
if (amt>=20)
    note20=Math.floor(amt/20)
    amt=amt-note20*20
if (amt>=10)
    note10=Math.floor(amt/10)
    amt=amt-note10*10
if (amt>=5)
    note5=Math.floor(amt/5)
    amt=amt-note5*5
if (amt>=2)
    note2=Math.floor(amt/2)
    amt=amt-note2*2
if (amt>=1)
    note1=Math.floor(amt/1)
    amt=amt-note1*1
console.log("500\t=\t","=",note500)
console.log("100\t=\t","=",note100)
console.log("50\t=\t","=",note50)
console.log("20\t=\t","=",note20)
console.log("10\t=\t","=",note10)
console.log("10\t=\t","=",note10)
console.log("5\t=\t","=",note5)
console.log("2\t=\t","=",note2)
console.log("1\t=\t","=",note1)