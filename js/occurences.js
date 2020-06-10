/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors occurences(cards) 
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */

function occurences(cards) {
  
  	var arrValue = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var value = keyOf(card.charAt(0));
		
		if(isNaN(arrValue[value])){
			
			arrValue[value] = 0;
			
		}
		
		arrValue[value] = arrValue[value] + 1;
		
	}

	return arrValue;
}

function keyOf(value){
	
	var res = null;
	
	for (var key in CARDS) {
	
		if(CARDS[key] == value){
			
			res = key;
			
		}
	
	}
	
	return res;
	
}