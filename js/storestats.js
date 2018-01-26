var test3;
var test4;
var test5;
var totalStats;
var health;
var money = 100;
var inventory = [];

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
        inventory.push("knife", " clothes");
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
    }

}


