/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple : 
 * cards = ["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"] isPaired(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isPaired(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */

function isAPair(cards) {

	var res = false;

  	var arrValue = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var value = card.charAt(0);
		
		if(isNaN(arrValue[value])){
			
			arrValue[value] = 0;
			
		}
		
		arrValue[value] = arrValue[value] + 1;
		
	}

	for (var key in arrValue) {

		if(arrValue[key] >= 2){
			
			res = true;
			
		}

	}
	
	return res;

}