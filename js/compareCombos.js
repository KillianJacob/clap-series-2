function compareCombos(cards1, cards2) {
	
	let tri = [cards1, cards2].sort(compare)
	return tri[0]

}

function compare(cards1, cards2) {

	if (getHandValue(cards1) > getHandValue(cards2)) return -1
	else if (getHandValue(cards1) < getHandValue(cards2)) return 1
	else {
		if (getHandValue(cards1) > getHandValue(cards2)) return -1
		else return 1
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
		return 4
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
		return 3
	}

	// Check for a pair
	if (isAPair(cards)) {
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		values.forEach(
			value => {
				let nbOcc = nbOccurences(cardsValue, value)
				if (nbOcc == 2) {
					return
				}
			}
		)
		return 2
	}

	// Check for a hauteur
	return 1
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
