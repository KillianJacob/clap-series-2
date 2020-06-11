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
<script src="js/Utils.js"></script>
<script src="js/compareCombos.js"></script>
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

setImagesOfPlayer(hand_hero,'hero');

setImagesOfPlayer(hand_vilain,'vilain');

setImagesOfPlayer(hand_bank,'bank');

var comboHero = ([hand_hero,hand_bank]).flat();
var comboVilain = ([hand_vilain,hand_bank]).flat();

var resHero = null;
var resVilain = null;

var combo = bestCombo(comboHero);

comboHero = combo[1];
resHero = combo[0];

combo = bestCombo(comboVilain);

comboVilain = combo[1];
resVilain = combo[0];

var WinHand = compareCombos(comboHero,comboVilain);

console.log("Hero : " + resHero);
console.log("Vilain : " + resVilain);

if(arraysEqual(WinHand,comboHero)){
    
    console.log("Winner : hero");

}
else if(arraysEqual(WinHand,comboVilain)){

    console.log("Winner : vilain");

}

</script>

</html>