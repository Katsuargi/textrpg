var test3;
var test4;
var test5;
var totalStats;
var health;
var money = 100;
var inventory = [];
var knife = false;
var clothes = false;
var sword = false;

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

function buySword() {
    if (money >= 50) {
        money = money - 50;
        var sword = true;
        inventory.push(" Sword");
        var knife = false;
        const index = inventory.indexOf("Knife");
    
        if (index !== -1) {
            inventory.splice(index, 1);
        }
        document.getElementById("swordB").classList.add('hide');
        document.getElementById("inventory").innerHTML=inventory;
    }
    else {
        alert("Not enough money!")
    }
}

function shopEnd() {
    document.getElementById("shoptoggle").classList.remove('hide');
    document.getElementById("playarea").classList.remove('hide');
    document.getElementById("shop").classList.add('hide');
}


