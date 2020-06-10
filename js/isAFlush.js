/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */

function isAFlush(cards) {
  // CODE HERE
  
	var res = false;
  
	var arrType = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var type = null;
		
		if(card.length == 3){
		
			type = card.charAt(2);
		
		}
		else{
		
			type = card.charAt(1);
			
		}
		
		if(isNaN(arrType[type])){
			
			arrType[type] = 0;
			
		}
		
		arrType[type] = arrType[type] + 1;
		
	}
	
	for (var key in arrType) {
	
		if(arrType[key] == 5){
			
			res = true;
			
		}
	
	}



	
	return res;
	
  
}