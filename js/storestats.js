var inventory = [];
var bCart = [];
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
    weaponDam: 0,
    exp: 0,  
}

var goblin = {
    baseStr: 3,
    baseDex: 3,
    baseSta: 3,
    health: 20,
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
    else if (player.baseStr < 1 || player.baseDex < 1 || player.baseSta  < 1 || totalStats < 15) {
        alert("Please spend all 15 points and make sure all values are between 1-10.")
    }
    else {
        player.health = player.baseSta*10;
        inventory.push("Knife", " Clothes");
        player.weaponDam = 1;
        document.getElementById("playern").innerHTML=player.name;
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("dexdisplay").innerHTML=player.baseDex;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("moneydisplay").innerHTML=player.money;
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("stats").classList.remove('hide');
        document.getElementById("inventoryarea").classList.remove('hide');
        throneRoom();
        ;
    }

}

function shopTest() {
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
    if (player.money >= cost && bCart.length > 0) {
        player.money = player.money - cost;
        inventory.push(bCart);
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("moneydisplay").innerHTML=player.money;
        bCart.length = 0;
        cost = 0;
        shopDisplayUp();
    }  else {
        alert("Not enough money!")
        }
}

function shopEnd() {
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

function gob() {
    areaFrom = "playarea";
    areaTo = "goblinFight";
    areaTransition();
}

function rEncounterForest() {
    goblin.health = 20;
    var r = Math.random();
    console.log(r);
    if (r <= .5){ 
        gob();
    } 
    else forestEntrance();
}

function fight(){
    while(player.health > 0 && goblin.health > 0) {
        var playerAtt = (Math.random() * 20) + player.baseDex;
        var playerDef = player.baseDex + 10;
        var goblinAtt = (Math.random() * 20) + goblin.baseDex;
        var goblinDef = goblin.baseDex + 10;
        if(playerAtt > goblinDef) {
            goblin.health = goblin.health - (player.baseStr + player.weaponDam);
        }
        if(goblinAtt > playerDef) {
        player.health = player.health - (goblin.baseStr);
        }
        document.getElementById("healthdisplay").innerHTML=player.health;
        setTimeout(fight(), 3000)
    }
    if(player.health <=0) {
        playerDeath()
    }
    else if(goblin.health <=0){
         areaFrom = "playarea";
         areaTo = "victory";
         player.exp = player.exp + 10;
         player.money = player.money +10;
         document.getElementById("moneydisplay").innerHTML=player.money;
         areaTransition();
    }
}

function playerDeath(){
    areaFrom = "playarea";
    areaTo = "dead";
    areaTransition();
}