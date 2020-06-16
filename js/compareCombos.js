function compareCombos(cards1, cards2) {
	
	let tri = [cards1, cards2].sort(compare)
	return tri[0]

}

function compare(cards1, cards2) {

	if (getHandValue(cards1) > getHandValue(cards2)){
		
		console.log("Hand 1 : " + getHandValue(cards1));
		console.log("Hand 2 : " + getHandValue(cards2));
		return -1

	}
	else if (getHandValue(cards1) < getHandValue(cards2)){
		
		console.log("Hand 1 : " + getHandValue(cards1));
		console.log("Hand 2 : " + getHandValue(cards2));		
		return 1
	}
	else {
		if (getHandValue(cards1) > getHandValue(cards2))
		{ 
			console.log("Hand 1 : " + getHandValue(cards1));
			console.log("Hand 2 : " + getHandValue(cards2));					
			return -1

		}
		else{

			console.log("Hand 1 : " + getHandValue(cards1));
			console.log("Hand 2 : " + getHandValue(cards2));		
		 return 1
		}
	}
}


function getCardsValue(cards) {
	let cardsValue = []
	let value = ""
	cards.forEach(
		card => {
			value = card.charAt(0)
			if (value == "1") value = value + "0"
			cardsValue.push(value)
		}
	)
	return cardsValue
}

function getCardsType(cards) {
	let cardsType = []
	let type = ""
	cards.forEach(
		card => {
			type = card.charAt(card.length-1)
			cardsType.push(type);
		}
	)
	return cardsType
}

function getHandValue(cards) {

	// cards = orderCards(cards)
	let cardsValue = getCardsValue(cards)
	let cardsType = getCardsType(cards)
	
	// Check for a full
	let occur = occurences(cards)
	let isAThree = false
	let isATwo = false
	for (let [key, value] of Object.entries(occur)) {
		if (value == 3 && isAThree == false) {
			isAThree = true
		}
	}
	for (let [key, value] of Object.entries(occur)) {
		if (value == 2 && isATwo == false) {
			isATwo = true
		}
	}
	if (isAThree && isATwo) {
		return 5 * getTotalValue(cards) * (2000/100);
	}

	// Check for a flush
	if (isAFlush(cards)) {
		let types = ["d", "c", "h", "s"]
		types.forEach(
			type => {
				let nbOcc = nbOccurences(cardsType, type)
				if (nbOcc > 4) {
					return
				}
			}
		)
		return 4 * getTotalValue(cards)* (1000/100);
	}

	// Check for a brelan
	if (isABrelan(cards)) {
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		values.forEach(
			value => {
				let nbOcc = nbOccurences(cardsValue, value)
				if (nbOcc == 3) {
					return
				}
			}
		)
		return 3 * getTotalValue(cards)* (500/100);
	}

	// Check for a pair
	else if (isAPair(cards)) {
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		values.forEach(
			value => {
				let nbOcc = nbOccurences(cardsValue, value)
				if (nbOcc == 2) {
					return
				}
			}
		)
		return 2 * getTotalValue(cards)* (200/100);
	}

	// Check for a hauteur
	return 1 * getTotalValue(cards) * (100/100);
}

function allIndexOf(arr, value) {
	if (arr.indexOf(value) >= 0) {
		let res = []
		for( let i = arr.indexOf(value); i >= 0; i = arr.indexOf(value,i+1) ) {
			res.push(i);
		}
		return res 
	}
	else return false
}

function nbOccurences(arr, value) {
	let indexes = allIndexOf(arr, value)
	if (indexes != false) return indexes.length
	else return false
}

function getTotalValue(cards) {

	let total_value = 0;

	cards = orderCards(cards);

	var TypeValue = {
		'2': '02',
		'3': '03',
		'4': '04',
		'5': '05',
		'6': '06',
		'7': '07',
		'8': '08',
		'9': '09',
		'10': '10',
		'J': '11',
		'Q': '12',
		'K': '13',
		'A': '14',		
	};
	
	var symbole = {
		'd' : 1,
		'c' : 2,
		'h' : 3,
		's' : 4,	
	}

	for (let i = 0; i < cards.length; i++) {
	
		var c = cards[i];

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
	    total_value = total_value + (TypeValue[value]);
		

}
return total_value;

}

function orderCards(cards) {

	let arrValue = {};
	
	let TypeValue = {
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'10': 10,
		'J': 11,
		'Q': 12,
		'K': 13,
		'A': 14,		
	};
	
	let symbole = {
		'd' : 4,
		'c' : 3,
		'h' : 2,
		's' : 1,	
	}
  
	var temp_arr = [];
  
	for (let i = 0; i < cards.length; i++) {
	
	
		for (let a = i; a < cards.length; a++) {
	
			var c = cards[i];
	
			var value = null;
		
			var type = null;
		
			if(c.length == 3){
		
				value = c.substring(0, 1);
				type = c.charAt(2);
			
		
			}
			else{
		
				value = c.charAt(0);
				type = c.charAt(1);
				
			}

			var c2 = cards[a];
	
			var value2 = null;
			var type2 = null;
	
			if(c2.length == 3){
		
				value2 = c2.substring(0, 1);
				type2 = c2.charAt(2);
			}
			else{
		
				value2 = c2.charAt(0);
				type2 = c2.charAt(1)
			}			
	
	
			if(TypeValue[value2] > TypeValue[value] || ( TypeValue[value2] >= TypeValue[value] && symbole[type] >= symbole[type2] ) ){
				
				var tempValue = c;
				
				cards[i] = cards[a];
				cards[a] = tempValue;
				
			}
	
		}
	
		
	
	}

	return cards;

}