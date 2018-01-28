var inventory = [];
var bCart = [];
var knife = false;
var clothes = false;
var sword = false;
var leatherA = false;
var cost = 0;
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
var player = {
    name: "X",
    baseStr: 0,
    baseDex: 0,
    baseSta: 0,
    health: 0,
    money: 100,    
}

function storeTest() {
    player.name = (document.getElementById("playerin").value);
    player.baseStr = parseInt(document.getElementById("str").value);
    player.baseDex = parseInt(document.getElementById("dex").value);
    player.baseSta = parseInt(document.getElementById("sta").value);
    var totalStats = player.baseStr + player.baseDex + player.baseSta;
    
    if (player.baseStr > 10) {
    	alert("Your strength is above 10. Please enter a value between 1-10");
    }
    else if (player.baseDex > 10) {
    	alert("Your dexterity is above 10. Please enter a value between 1-10");
    }
    else if (player.baseSta > 10) {
    	alert("Your stamina is above 10. Please enter a value between 1-10");
    }
    else if (totalStats > 15) {
    	alert("Your total stats are above 15. Please lower your stats.")
    }
    else {
        player.health = player.baseSta*10;
        inventory.push("Knife", " Clothes");
        var knife = true;
        var clothes = true;
        document.getElementById("playern").innerHTML=player.name;
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("dexdisplay").innerHTML=player.baseDex;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("moneydisplay").innerHTML=player.money;
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
    const main = document.getElementById(areaFrom);
    const div = document.getElementById(areaTo);
    const clone = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();

    main.appendChild(clone);
    ;
}

function throneRoom() {
    areaFrom = "playarea";
    areaTo = "castle1";
    areaTransition();
}

function forestEntrance() {
    areaFrom = "playarea";
    areaTo = "forestEntrance";
    areaTransition();
}