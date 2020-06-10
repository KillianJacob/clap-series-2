<html>

<head>

<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<script src="js/bootstrap.js"></script>
<script src="js/dealer.js"></script>
<script src="js/bestCombo.js"></script>
<script src="js/occurences.js"></script>
<script src="js/orderCards.js"></script>
<script src="js/isAFlush.js"></script>
<script src="js/isAPair.js"></script>
</head>

<body>

<div class="container">

    <div class="row mt-5">

        <div class="col text-center">

            <div class="row text-center mb-3">
                <div class="col">
                    Hero
                </div>
            </div>

            <div class='row'>

                <div class="col">
                <img class="border" id="hero_card_0" src="assets/back.png" width="157" height="238"> 
                </div>

                <div class="col">
                <img class="border" id="hero_card_1" src="assets/back.png" width="157" height="238"> 
                </div>

            </div>

        </div>

        <div class="col text-center">

            <button type="button" class="btn btn-secondary">Jouer !</button>

        </div>

        <div class="col mb-3 text-center">

        <div class="row text-center mb-3">
                <div class="col">
                    vilain
                </div>
            </div>

            <div class='row'>


            <div class="col">
                <img class="border" id="vilain_card_0" src="assets/back.png" width="157" height="238"> 
                </div>

                <div class="col">
                <img class="border" id="vilain_card_1" src="assets/back.png" width="157" height="238"> 
                </div>
                
            </div>

        </div>

    </div>

    <div class="row mt-5 text-center">

        <div class="col">

        <img class="border" id="bank_card_0" src="assets/back.png" width="157" height="238">           

        </div>
        <div class="col">

        <img class="border" id="bank_card_1" src="assets/back.png" width="157" height="238">           

        </div>
        <div class="col">

            <img class="border" id="bank_card_2" src="assets/back.png" width="157" height="238">           

        </div>
        <div class="col">

            <img class="border" id="bank_card_3" src="assets/back.png" width="157" height="238">           

        </div>
        <div class="col">

            <img class="border" id="bank_card_4" src="assets/back.png" width="157" height="238">           

        </div>       
    </div>

</div>

</body>

<script>

var hands = dealer();
console.log(hands[0]);
console.log(hands[1]);
console.log(hands[2]);
var hand_hero = hands[1];
var hand_vilain = hands[2];
var hand_bank = hands[0];

const cards = {
  ace: "A",
  king: "K",
  queen: "Q",
  jack: "J",
  10: "10",
  9: "9",
  8: "8",
  7: "7",
  6: "6",
  5: "5",
  4: "4",
  3: "3",
  2: "2"
}

const TYPES = {
  diamonds: "d",
  hearts: "h",
  spades: "s",
  clubs: "c"
}

for (let i = 0; i < hand_hero.length; i++) {

    var c = hand_hero[i];

    var value = null;
    var type = null;

    if(c.length == 3){
		
        value = c.substring(0, 2);
        type = c.charAt(2);

    }
    else{

        value = c.charAt(0);
        type = c.charAt(1);
        
    }
    
    imgURL = keyOf(value) + '_of_' + keyOfType(type) + '.png';

    document.getElementById('hero_card_' + i).setAttribute("src", "assets/" + imgURL);

}

for (let i = 0; i < hand_vilain.length; i++) {

var c = hand_vilain[i];

var value = null;
var type = null;

if(c.length == 3){
    
    value = c.substring(0, 2);
    type = c.charAt(2);

}
else{

    value = c.charAt(0);
    type = c.charAt(1);
    
}

imgURL = keyOf(value) + '_of_' + keyOfType(type) + '.png';

document.getElementById('vilain_card_' + i).setAttribute("src", "assets/" + imgURL);

}

for (let i = 0; i < hand_bank.length; i++) {

var c = hand_bank[i];

var value = null;
var type = null;

if(c.length == 3){
    
    value = c.substring(0, 2);
    type = c.charAt(2);

}
else{

    value = c.charAt(0);
    type = c.charAt(1);
    
}

imgURL = keyOf(value) + '_of_' + keyOfType(type) + '.png';

document.getElementById('bank_card_' + i).setAttribute("src", "assets/" + imgURL);




}


function keyOf(value){
	
	var res = null;
	
	for (var key in cards) {
	
		if(cards[key] == value){
			
			res = key;
			
		}
	
	}
	
	return res;
	
}

function keyOfType(type){
	
	var res = null;
	
	for (var key in TYPES) {
	
		if(TYPES[key] == type){
			
			res = key;
			
		}
	
	}
	
	return res;
	
}

</script>

</html>