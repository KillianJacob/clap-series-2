/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */
function dealer() {
	
	var deck = [];
	
	var hand1 = [];

	var handHero = [];	

	var handVilain = [];

	var arrValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	
	var arrType = ['d','c','h','s'];	
	
	for (let i = 0; i < arrType.length; i++) {
		
		for (let ii = 0; ii < arrValue.length; ii++) {
		
			deck.push(arrValue[ii]+arrType[i]);
		
		}
		
	}
	
	shuffle(deck);
	
	for(let i = 0; i < 5; i++) {
		
		hand1.push(deck[0]);
		
		deck.splice(0, 1);
		
	}

	for(let i = 0; i < 2; i++) {
		
		handHero.push(deck[0]);
		
		deck.splice(0, 1);
		
	}

	for(let i = 0; i < 2; i++) {
		
		handVilain.push(deck[0]);
		
		deck.splice(0, 1);
		
	}	
	
	return [hand1,handVilain,handHero];
	
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}