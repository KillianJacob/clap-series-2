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
  
  const types = {
    diamonds: "d",
    hearts: "h",
    spades: "s",
    clubs: "c"
  }

function nameOfValue(value){
	
	var res = null;
	
	for (var key in cards) {
	
		if(cards[key] == value){
			
			res = key;
			
		}
	
	}
	
	return res;
	
}

function nameOfType(type){
	
	var res = null;
	
	for (var key in types) {
	
		if(types[key] == type){
			
			res = key;
			
		}
	
	}
	
	return res;
	
}

function setImagesOfPlayer(hand,p){

    //player = hero/vilain/bank

    for (let i = 0; i < hand.length; i++) {

        let c = hand[i];
    
        let value = null;
        let type = null;
    
        if(c.length == 3){
            
            value = c.substring(0, 2);
            type = c.charAt(2);
    
        }
        else{
    
            value = c.charAt(0);
            type = c.charAt(1);
            
        }
        
        imgURL = nameOfValue(value) + '_of_' + nameOfType(type) + '.png';

        document.getElementById(p + '_card_' + i).setAttribute("src", "assets/" + imgURL);

    }


}

function getCardsValue(cards) {
	let cardsValue = []
	let value = ""
	cards.forEach(
		card => {
			value = card.slice(0, card.length - 1)
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

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }