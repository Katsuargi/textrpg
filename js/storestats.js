var test3;
var test4;
var test5;
var totalStats;

function storeTest() {
    test3 = parseInt(document.getElementById("str").value);
    test4 = parseInt(document.getElementById("dex").value);
    test5 = parseInt(document.getElementById("sta").value);

    totalStats = test3 + test4 + test5;
    console.log(test3, test4, test5, totalStats);
    if (test3 > 10) {
    	alert("Your strength is above 10. Please enter a value between 1-10");
    }
    else if (test4 > 10) {
    	alert("Your dexterity is above 10. Please enter a value between 1-10");
    }
    else if (test5 > 10) {
    	alert("Your stamina is above 10. Please enter a value between 1-10");
    }
    else if (totalStats > 15) {
    	alert("Your total stats are above 15. Please lower your stats.")
    }
    else {
    	alert("Looking good!");
    }
}

