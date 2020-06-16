function isABrelan(cards) {

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

		if(arrValue[key] >= 3){
			
			res = true;
			
		}

	}
	
	return res;

}