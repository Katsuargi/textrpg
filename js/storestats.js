var test3;
var test4;
var test5;
var totalStats;
var health;
var money = 100;
var inventory = [];
var inventorysan = [];
var prices = {sword: 50, leatherA: 100}
var bCart = [];
var knife = false;
var clothes = false;
var sword = false;
var leatherA = false;
var cost = 0;

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
        document.getElementById("textrpg").innerHTML="";
        document.getElementById("stats").classList.remove('hide');
        document.getElementById("castle1").classList.remove('hide');
        document.getElementById("inventoryarea").classList.remove('hide');
        document.getElementById("shoptoggle").classList.remove('hide');
    }

}

function shopTest() {
    document.getElementById("shoptoggle").classList.add('hide');
    document.getElementById("playarea").classList.add('hide');
    document.getElementById("shop").classList.remove('hide');
}


function addSword() {
    cost = cost + prices.sword;
    bCart.push(" Sword");
    shopDisplayUp();
}

function removeSword(){
    const index = bCart.indexOf(" Sword");
        
        if (index !== -1) {
            bCart.splice(index, 1);
            cost = cost - prices.sword;
        }
    shopDisplayUp();
}

function addLeatherA() {
    cost = cost + prices.leatherA;
    bCart.push(" Leather Armor");
    shopDisplayUp();
}

function removeLeatherA(){
    const index = bCart.indexOf(" Leather Armor");
        
        if (index !== -1) {
            bCart.splice(index, 1);
            cost = cost - prices.leatherA;
        }
    shopDisplayUp();
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