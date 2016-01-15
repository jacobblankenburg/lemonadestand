"use strict";

function getUserinput (message) {
	var userInput;
	userInput = window.prompt(message);
	return userInput;
}
function getUsername (message) {
	var username;
	username = getUserinput("Enter your name");
	return username;
}
function generateWeather () {
	var Weather;
	Weather = Math.floor ((Math.random() * 40) + 70);
	return Weather;
}
function startOfday(username, Weather, i, price) {
	alert("Hello " + username + " the temperature today is " + Weather + " It is day number " + i);
}
function displaySupplies (Supplies, price) {
	var moneyConvert;
	var output;
	output = (Supplies.money / 100);
	moneyConvert = output.toFixed(2);
		alert("You currently have $ " + moneyConvert + " You have " + Supplies.tartLemonade + " tart lemonade " + Supplies.sweetLemonade + " sweet lemonade " + Supplies.secreteRecipieLemonade + " of the Secret recipie " + " And youre selling each cup for $" + price);
}
function setCupPrice () {
	var playerCup;
	var priceOfCup;
	var price;
	var round;
	var priceConvert;


	playerCup = getUserinput("Please enter the price of your cup of lemonade")
	priceOfCup = numberCheck(playerCup,0,350);
	price = Number(priceOfCup);


	return price;
}	
function numberCheck(Input,Min,Max){
    var checkNumber;
    var number;
    var roundedOutput;
    var newUserinput;
    number = Number(Input);

    checkNumber = isNaN(number);
    if (checkNumber === true) {
        alert(Input + " is not a number");
        newUserinput = getUserinput("Please enter a valid number");
        return numberCheck (newUserinput,Min,Max);
    } else if (number < Min || number > Max){
        alert("User input is outside of min-max range");
        newUserinput = getUserinput("Please enter a valid number");
        return numberCheck(newUserinput,Min,Max);
    } else {
        roundedOutput = number;
        return roundedOutput;
    }
}
function genBuyers () {
	var probality;
	probality = Math.floor((Math.random() * 20) + 1);
	return probality;
}
function probalityOfBUyers(Weather, price) {
	var defualtBuy;
	var modifiedBuy;

	defualtBuy = 10;
	modifiedBuy = defualtBuy + (Weather * .1) - (price * .5);

	return modifiedBuy;
}

function main () {

var username;
var Weather;
var numberofdays;
var Supplies;
var cupPrice;
var prices;
var price;


username = getUsername ();
Supplies = { tartLemonade:0, sweetLemonade:0, secreteRecipieLemonade:0, money:2500, }; 
prices = {regTart:200, medTart:300, largeTart:400, regSweet:250, medSweet:350, largeSweet:450, regSecret:350, medSecret:450, largeSecret:550}
 
numberofdays = 7;

for (var i = 1; i <= numberofdays; i++) {
	Weather = generateWeather ();
	startOfday(username,Weather,i, price);
	price = setCupPrice(price);
	displaySupplies(Supplies, price);
	Supplies.money = Supplies.money - prices.regTart;
	console.log(Supplies.money);
}
}
main();


