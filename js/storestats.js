var test3;
var test4;
var test5;
var totalStats;
var health;
var money = 100;
var inventory = [];
var inventorysan = [];
var bCart = [];
var knife = false;
var clothes = false;
var sword = false;
var leatherA = false;
var cost = 0;
var workingCost;
var workingName;
var swordI = {
    name: " Sword",
    price: 50
}
var leatherI = {
    name: " Leather Armor",
    price: 100
}
var locations = {

}

function storeTest() {
    playern = (document.getElementById("playerin").value);
    baseStr = parseInt(document.getElementById("str").value);
    baseDex = parseInt(document.getElementById("dex").value);
    baseSta = parseInt(document.getElementById("sta").value);
    
    totalStats = baseStr + baseDex + baseSta;
    console.log(playern, baseStr, baseDex, baseSta, totalStats);
    if (baseStr > 10) {
    	alert("Your strength is above 10. Please enter a value between 1-10");
    }
    else if (baseDex > 10) {
    	alert("Your dexterity is above 10. Please enter a value between 1-10");
    }
    else if (baseSta > 10) {
    	alert("Your stamina is above 10. Please enter a value between 1-10");
    }
    else if (totalStats > 15) {
    	alert("Your total stats are above 15. Please lower your stats.")
    }
    else {
        health = baseSta*10;
        inventory.push("Knife", " Clothes");
        var knife = true;
        var clothes = true;
        document.getElementById("playern").innerHTML=playern;
        document.getElementById("healthdisplay").innerHTML=health;
        document.getElementById("strdisplay").innerHTML=baseStr;
        document.getElementById("dexdisplay").innerHTML=baseDex;
        document.getElementById("stadisplay").innerHTML=baseSta;
        document.getElementById("moneydisplay").innerHTML=money;
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("stats").classList.remove('hide');
        document.getElementById("inventoryarea").classList.remove('hide');
        document.getElementById("shoptoggle").classList.remove('hide');
        throneRoom();
        ;
    }

}

function shopTest() {
    document.getElementById("shoptoggle").classList.add('hide');
    document.getElementById("playarea").classList.add('hide');
    document.getElementById("shop").classList.remove('hide');
}

function addItem() {
    cost = cost + workingCost;
    bCart.push(workingName);
    shopDisplayUp();
}

function removeItem() {
    const index = bCart.indexOf(workingName);
    
    if (index !== -1) {
        bCart.splice(index, 1);
        cost = cost - workingCost;
        shopDisplayUp();
    }
}


function addSword() {
    workingName = swordI.name;
    workingCost = swordI.price;
    addItem();
}

function removeSword(){
    workingName = swordI.name;
    workingCost = swordI.price;
    removeItem();
}

function addLeatherA() {
    workingName = leatherI.name;
    workingCost = leatherI.price;
    addItem();
}

function removeLeatherA(){
    workingName = leatherI.name;
    workingCost = leatherI.price;
    removeItem();
}

function buy() {
    if (money >= cost && bCart.length > 0) {
        money = money - cost;
        inventory.push(bCart);
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("moneydisplay").innerHTML=money;
    }  else {
        alert("Not enough money!")
        }
}

function shopEnd() {
    document.getElementById("shoptoggle").classList.remove('hide');
    document.getElementById("playarea").classList.remove('hide');
    document.getElementById("shop").classList.add('hide');
}

function shopDisplayUp(){
    document.getElementById("bcart").innerHTML=bCart;
    document.getElementById("price").innerHTML=cost;  
}

function forestOne(){
    document.getElementById()
}

function areaTransition(){
    const main = document.getElementById("playarea");
    const div = document.getElementById("castle1");
    const clone = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();

    main.appendChild(clone);
    ;
}

function throneRoom() {
    areaFrom = playarea;
    areaTo = castle1;
    areaTransition();
}