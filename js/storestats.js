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
    defense: 0,
    exp: 0,  
}

var goblin = {
    baseStr: 3,
    baseDex: 3,
    baseSta: 3,
    health: 30,
    money: 10,
    exp: 1,
}

var wolf = {
    baseStr: 4,
    baseDex: 4,
    baseSta: 4,
    health: 40,
    money: 15,
    exp: 2,
}

var quests = {
    princess: 0,
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
        document.getElementById("expdisplay").innerHTML=player.exp;
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("stats").classList.remove('hide');
        document.getElementById("inventoryarea").classList.remove('hide');
        quests.princess = 1;
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
    var swordY = true;
    addItem();
}

function removeSword(){
    workingName = swordI.name;
    workingCost = swordI.price;
    var swordY = false;
    removeItem();
}

function addLeatherA() {
    workingName = leatherI.name;
    workingCost = leatherI.price;
    var leatherY = true;
    addItem();
}

function removeLeatherA(){
    workingName = leatherI.name;
    workingCost = leatherI.price;
    var leatherY = false;
    removeItem();
}

function buy() {
    if (player.money >= cost && bCart.length > 0) {
        player.money = player.money - cost;
        inventory = inventory.concat(bCart);
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("moneydisplay").innerHTML=player.money;
        bCart.length = 0;
        cost = 0;
        if(swordY = true) {player.weaponDam = 3}
        if(leatherY = true) {player.defense = 3}
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
    const backup = document.getElementById("backup");
    const clone = div.cloneNode(true);
    const clone2 = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();
    while (backup.firstChild) backup.firstChild.remove();

    main.appendChild(clone);
    backup.appendChild(clone2);
    ;
}

function areaTransitionV(){
    const main = document.getElementById(areaFrom);
    const div = document.getElementById(areaTo);
    const clone = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();

    main.appendChild(clone);
}

function throneRoom() {
    console.log(quests.princess)
    if (quests.princess == 1) {
    areaFrom = "playarea";
    areaTo = "castle1";
    }
    else if (quests.princess == 2) {
    areaFrom = "playarea";
    areaTo = "castle2";
    }
    console.log(quests.princess)
    areaTransition();
}

function forestEntrance() {
    areaFrom = "playarea";
    areaTo = "forestEntrance";
    rEncounterForest();
}

function forest2() {
    areaFrom = "playarea";
    areaTo = "forest2";
    rEncounterForest();
}

function gob() {
    areaFrom = "playarea";
    areaTo = "goblinFight";
    //areaR = document.getElementById(areaFrom);
    goblin.health = 20;
    enemyName = goblin;
    areaTransitionV();
}

function wolfF() {
    areaFrom = "playarea";
    areaTo = "wolfFight";
//  areaR = "playarea";
    wolf.health = 40;
    enemyName = wolf;
    areaTransitionV();
}

function rEncounterForest() {
    var r = Math.random();
    console.log(r);
    if (r <= .25){ 
        gob();
    } 
    else if (r >= .26 && r <= .5) {
        wolfF();
    }
    else { 
        areaTransition();
    }
}

function fight(){
    console.log(enemyName);
    while(player.health > 0 && enemyName.health > 0) {
        var playerAtt = (Math.random() * 20) + player.baseDex;
        var playerDef = player.baseDex + player.defense + 10;
        var enemyAtt = (Math.random() * 20) + enemyName.baseDex;
        var enemyDef = enemyName.baseDex + 10;
        if(playerAtt > enemyDef) {
            enemyName.health = enemyName.health - (player.baseStr + player.weaponDam);
        }
        if(enemyAtt > playerDef) {
        player.health = player.health - (enemyName.baseStr);
        }
        document.getElementById("healthdisplay").innerHTML=player.health;
    }
    if(player.health <=0) {
        playerDeath()
    }
    else if(enemyName.health <=0){
         areaFrom = "playarea";
         areaTo = "victory";
         player.exp = player.exp + enemyName.exp;
         player.money = player.money + enemyName.money;
         document.getElementById("moneydisplay").innerHTML=player.money;
         document.getElementById("expdisplay").innerHTML=player.exp;
         areaTransitionV();
    }
}

function playerDeath(){
    areaFrom = "playarea";
    areaTo = "dead";
    areaTransition();
}

function princessQuest(){
    areaFrom = "playarea";
    areaTo = "princessQuest";
    quests.princess = 2;
    areaTransitionV();
}


function goBack(){
    areaFrom = "playarea";
    areaTo = "backup";
    //areaTo = areaR;
    areaTransition();
}

